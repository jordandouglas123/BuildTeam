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
  {
    description: "Skillful",
    projectBudget: 100000,
    projectDuration: 1,
    positions: [
      {
        Occupation: "Project Manager",
        Level: "Expert",
      },
      {
        Occupation: "Database Administrator",
        Level: "Intern",
      },
      {
        Occupation: "Frontend Developer",
        Level: "Intermediate",
      },
      {
        Occupation: "Backend Developer",
        Level: "Advanced",
      },
      {
        Occupation: "System Analyst",
        Level: "Expert",
      },
    ],
  },
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
      } 
      else {
        team.push(rows[0]);
        budget -= rows[0].Salary * length;
        var que =
          "UPDATE heroku_1aabc12bcbbe678.employees SET status = 1 WHERE occupation = ? AND level = ? AND Status = 0 AND desiredSalary = (SELECT * FROM (SELECT MIN(desiredSalary) FROM heroku_1aabc12bcbbe678.employees  WHERE occupation = ? AND level = ? AND status = 0) temp)";
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
      }
    console.log(rows);
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
buildTeam(
  suggestedTeam,
  formData[0].budget,
  formData[0].positions,
  formData[0].projectDuration,
  connection
);
console.log(suggestedTeam);

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
  formData.push({
    description: req.body.description,
    projectBudget: req.body.projectBudget,
    projectDuration: req.body.projectDuration,
    positions: [
      {
        teamMemberOne: req.body.teamMemberOne,
        teamMemberOneLevel: req.body.teamMemberOneLevel,
      },
      {
        teamMemberTwo: req.body.teamMemberTwo,
        teamMemberTwoLevel: req.body.teamMemberTwoLevel,
      },
      {
        teamMemberThree: req.body.teamMemberThree,
        teamMemberThreeLevel: req.body.teamMemberThreeLevel,
      },
      {
        teamMemberFour: req.body.teamMemberFour,
        teamMemberFourLevel: req.body.teamMemberFourLevel,
      },
      {
        teamMemberFive: req.body.teamMemberFive,
        teamMemberFiveLevel: req.body.teamMemberFiveLevel,
      },
    ],
  });

  res.send({ ok: true });
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
