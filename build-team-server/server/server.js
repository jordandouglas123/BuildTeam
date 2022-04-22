const express = require("express");
const cors = require("cors");
const middleware = require("../middleware");
const e = require("express");

let test = async () => {
    const db = require("./database");
    const conn = await db();
    return conn;
};

const connection = test();

let suggestedTeam = [
    {
        userId: "3eKwNl38WrS012PBUHpgwFd4gB92",
        firstName: "Akiel",
        lastName: "Romain",
        occupation: "Software Engineer",
        level: "Advance",
        description: "Tall but a little shorter than Jael",
        desiredSalary: "10000",
        employerAccept: false,
        employerDeclined: false,
        employeeTeamId: null,
    },
];

let currentTeams = [
    {
        teamId: "NRGa61GY2hgsBPJmU8dD3InosbX2",
        members: [
            {
                userId: "3eKwNl38WrS012PBUHpgwFd4gB92",
                firstName: "Akiel",
                lastName: "Romain",
                occupation: "Software Engineer",
                level: "Advance",
                description: "Tall but a little shorter than Jael",
                desiredSalary: "10000",
                employerAccept: false,
                employerDeclined: false,
                employeeTeamId: null,
            },
            {
                userId: "4",
                firstName: "Hasie",
                lastName: "Alexander",
                occupation: "Frontend Developer",
                level: "Intermidate",
                description: "King",
                desiredSalary: "10000",
                employerAccept: false,
                employerDeclined: false,
                employeeTeamId: null,
            },
            {
                userId: "5",
                firstName: "Jordon",
                lastName: "Douglas",
                occupation: "Backend Developer",
                level: "Intermidate",
                description: "King",
                desiredSalary: "10000",
                employerAccept: false,
                employerDeclined: false,
                employeeTeamId: null,
            },
            {
                userId: "1",
                firstName: "Jael",
                lastName: "Romain",
                occupation: "Software Developer",
                level: "Advance",
                description: "Tall",
                desiredSalary: "10000",
                employerAccept: false,
                employerDeclined: false,
                employeeTeamId: null,
            },
        ],
    },
];

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
                    if(err){
                        console.log(err.message);
                        console.log("Not Created");
                        
                    }
                    else{
                        console.log("Employer Created");
                        return res.send({ok: true})
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
    
    suggestedTeam.push({
        description: req.body.description,
        projectBudget: req.body.projectBudget,
        projectDuration: req.body.projectDuration,
        teamMemberOne: req.body.teamMemberOne,
        teamMemberOneLevel: req.body.teamMemberOneLevel,
        teamMemberTwo: req.body.teamMemberTwo,
        teamMemberTwoLevel: req.body.teamMemberTwoLevel,
        teamMemberThree: req.body.teamMemberThree,
        teamMemberThreeLevel: req.body.teamMemberThreeLevel,
        teamMemberFour: req.body.teamMemberFour,
        teamMemberFourLevel: req.body.teamMemberFourLevel,
        teamMemberFive: req.body.teamMemberFive,
        teamMemberFiveLevel: req.body.teamMemberFiveLevel,
    });

    res.send({ok: true});
});

app.get("/api/suggestedTeams", (req, res) => {
    res.send(suggestedTeam);
});

app.get("/api/currentTeams", (req, res) => {
    res.send(currentTeams);
});

app.get("/api/team:id", (req, res) => {
    const { id } = req.params;
    let team = currentTeams.filter((team) => team.teamId === id);
    res.send(team[0]);
});

app.listen(port, () => {
    console.log(`Running on port ${5000}`);
});
