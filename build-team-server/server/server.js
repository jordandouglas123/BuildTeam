const express = require("express");
const cors = require("cors");
const middleware = require("../middleware");

let test = async () => {
    const db = require("./database");
    const conn = await db();
    return conn; 
};

const connection = test();

let formData = [
   
];


let suggestedTeam = [];

async function findEmployee(occupation, budget, length, team, connection) {
    let sql =
        "SELECT * FROM heroku_1aabc12bcbbe678.employees WHERE occupation = ? AND level = ? AND status = 0 AND desiredSalary = (SELECT MIN(desiredSalary) FROM heroku_1aabc12bcbbe678.employees WHERE occupation = ? AND level = ? AND status = 0) ";
    connection.then(async function (value) {
        let [rows, fields] = await value.query(sql, [
            occupation.Occupation,
            occupation.Level,
            occupation.Occupation,
            occupation.Level,
        ]);
        if (rows.length < 1) {
            console.log("Nobody found");
        } else {
            team.push(rows[0]);
            console.log(rows[0]);
            budget -= rows[0].Salary * length;
        }
        });
            var que =
                "UPDATE heroku_1aabc12bcbbe678.employees SET status = 1 WHERE occupation = ? AND level = ? AND status = 0 AND desiredSalary = (SELECT * FROM (SELECT MIN(desiredSalary) FROM heroku_1aabc12bcbbe678.employees  WHERE occupation = ? AND level = ? AND status = 0) temp)";
            connection.then(async function (value) {
                await value.query(
                    que,
                    [
                        occupation.Occupation,
                        occupation.Level,
                        occupation.Occupation,
                        occupation.Level,
                    ],
                    (err, result) => {
                        if (err) throw err;
                    }
                );
            });
        
     
    

    return budget;
}

async function buildTeam(team, budget, requiredPositions, length, connection) {
    let recommended = budget;
    for (let i = 0; i < requiredPositions.length; i++) {
        budget = await findEmployee(
            requiredPositions[i],
            budget,
            length,
            team,
            connection
        );
    }

    console.log("Recommended team costs: ", recommended - budget);
    return budget;
}
 async function refactor(Team, emps, budget, length,connection) {
   
    for (let i = 0; i < emps.length; i++) {
        budget += emps[i].Salary*length;
    }
   
    for (let i = 0; i < emps.length; i++) {
        for (let j = 0; j < Team.length; j++) {
            
            if (emps[i].userId === Team[j].userId) {
                Team.splice(j, 1);
                budget = await findEmployee({ Occupation: emps[i].occupation, Level: emps[i].level }, budget, length, Team,connection);
                
            }
            
        }
        
    } 
 
      for (let i = 0; i < emps.length; i++) {
       var que =
         "UPDATE heroku_1aabc12bcbbe678.employees SET Status = 0 WHERE userId = ?";
        connection.then(async function (value){value.query(que, [emps[i].userId], (err, result) => {
         if (err) throw err;
            console.log(result.affectedRows);
        });
    })
    } 
    
} 


const app = express();
const port = 5000;

app.use(cors());

//app.use(middleware.decodeToken)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/api/employees", (req, res) => {
    const userId = req.body.userId;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const occupation = req.body.occupation;
    const level = req.body.level;
    const description = req.body.description;
    const desiredSalary = req.body.desiredSalary;
    const status = req.body.status;
    const employeeTeamId = req.body.employeeTeamId;

    connection.then(function (value) {
        value.query(
            "INSERT INTO heroku_1aabc12bcbbe678.employees (userId,firstName,lastName,occupation,level,description,desiredSalary,status,employeeTeamId) VALUES(?,?,?,?,?,?,?,?,?) ",
            [
                userId,
                firstName,
                lastName,
                occupation,
                level,
                description,
                desiredSalary,
                status,
                employeeTeamId,
            ],
            (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Employee created!");
                }
            }
        );
    });
    return res.status(200).send({ ok: true });
});

app.get("/api/employee:id", (req, res) => {
    const { id } = req.params;
    const login = async (id, res) => {
        connection.then(function (value) {
            value.query(
                "SELECT * FROM heroku_1aabc12bcbbe678.employees WHERE userId = ?",
                [id],
                (err, response) => {
                    if (err) {
                        console.log(err.message);
                        console.log("User not found");
                    } else {
                        return res.send(response);
                    }
                }
            );
        });
    };
    login(id, res);
});

app.post("/api/employers", (req, res) => {
    const userId = req.body.userId;
    const name = req.body.name;
    const type = req.body.type;
    const description = req.body.description;
    const budget = req.body.budget;

    const employerSignUp = async (res) => {
        connection.then((value) => {
            value.query(
                "INSERT INTO heroku_1aabc12bcbbe678.employers (userId, name, type, description, budget) VALUES(?,?,?,?,?) ",
                [userId, name, type, description, budget],
                (err, response) => {
                    if (err) {
                        console.log(err.message);
                        console.log("Not Created");
                    } else {
                        console.log("Employer Created");
                        return res.send({ ok: true });
                    }
                }
            );
        });
    };
    employerSignUp(res);
});

app.get("/api/employer:id", (req, res) => {
    const { id } = req.params;
    const login = async (id, res) => {
        connection.then(function (value) {
            value.query(
                "SELECT * FROM heroku_1aabc12bcbbe678.employers WHERE userId = ?",
                [id],
                (err, response) => {
                    if (err) {
                        console.log(err.message);
                        console.log("User not found");
                    } else {
                        return res.send(response);
                    }
                }
            );
        });
    };
    login(id, res);
});

app.post("/api/suggestedTeam", (req, res) => {
    formData = [];
    suggestedTeam = [];
    console.log(formData[0])
    formData.push({
        description: req.body.description,
        projectBudget: req.body.projectBudget,
        projectDuration: req.body.projectDuration,
        positions: [
            {
                Occupation: req.body.teamMemberOne,
                Level: req.body.teamMemberOneLevel,
            },
            {
                Occupation: req.body.teamMemberTwo,
                Level: req.body.teamMemberTwoLevel,
            },
            {
                Occupation: req.body.teamMemberThree,
                Level: req.body.teamMemberThreeLevel,
            },
            {
                Occupation: req.body.teamMemberFour,
                Level: req.body.teamMemberFourLevel,
            },
            {
                Occupation: req.body.teamMemberFive,
                Level: req.body.teamMemberFiveLevel,
            },
        ],
    });
    console.log(formData[0]) 
    buildTeam(suggestedTeam, formData[0].budget, formData[0].positions, formData[0].projectDuration, connection)
    res.send({ ok: true });
});

app.get("/api/suggestedTeams", (req, res) => {
    res.send(suggestedTeam);
});

app.post("/api/offer:id", (req, res) => {
    const { id } = req.params;
    const userId = req.body.userId
    const employerOfferID = req.body.employerOfferId
    const update = async (res) => {
        connection.then((value) => {
            value.query("UPDATE heroku_1aabc12bcbbe678.employees SET employeeTeamID = ?, accepted = 1, employerOffer = 0, employerOfferID = ? WHERE userId = ?", [employerOfferID, null, id],
                (err, response) => {
                    if(err){
                        console.log(err.message);
                    }
                    else{
                        res.send({ok: true})
                    }
                }
            );
        })
    }
    update(res)
})

app.post("/api/declined:id", (req, res) => {
    const { id } = req.params;
    const userId = req.body.userId;
    const employerOfferID = req.body.employerOfferId;
    const update = async (res) => {
        connection.then((value) => {
            value.query(
                "UPDATE heroku_1aabc12bcbbe678.employees SET employerOffer = 0, employerOfferID = ? WHERE userId = ?",
                [null, id],
                (err, response) => {
                    if (err) {
                        console.log(err.message);
                    } else {
                        res.send({ ok: true });
                    }
                }
            );
        });
    };
    update(res);
});

app.post("/api/currentTeams:id", (req, res) => {
    const { id } = req.params;
    const employee = req.body.teamMemberId
    const editMember = async (res) => {
        connection.then((value) => {
            value.query("UPDATE heroku_1aabc12bcbbe678.employees SET employerOfferID = ?, employerOffer = 1 WHERE userID = ?", [id, employee], 
                (err, response) => {
                    if(err){
                        console.log(err.message);
                    }
                    else{
                        res.send({ok: true})
                    }
                }            
            );
        })
    }
    editMember(res);
});

app.get("/api/team:id", (req, res) => {
    const { id } = req.params;
    const team = async (res) => {
        connection.then((value) => {
            value.query("SELECT * FROM heroku_1aabc12bcbbe678.employees WHERE accepted = 1 AND employeeTeamId = ?", [id],
                (err, response) => {
                    if(err){
                        console.log(err.message)
                    }
                    else{
                        res.send(response)
                    }
                }
            );
        })
    }
    team(res); 
});

app.listen(port, () => {
    console.log(`Running on port ${5000}`);
});
