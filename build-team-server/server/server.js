const express = require("express");
const cors = require("cors");
const middleware = require("../middleware");

let employees = [
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
    {
        userId: "2",
        firstName: "Jael2",
        lastName: "Romain",
        occupation: "Software Designer",
        level: "Advance",
        description: "Tall",
        desiredSalary: "10000",
        employerAccept: false,
        employerDeclined: false,
        employeeTeamId: null,
    },
    {
        userId: "3",
        firstName: "Zarifa",
        lastName: "Romain",
        occupation: "Software Designer",
        level: "Intermidate",
        description: "Jael Sister",
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
        userId: "mQm2AslWN7UGdwraL2NDGssL4CS2",
        firstName: "Jordon",
        lastName: "Douglas",
        occupation: "Backend Developer",
        level: "Intermidate",
        description: "King",
        desiredSalary: "15000",
        employerAccept: false,
        employerDeclined: false,
        employeeTeamId: null,
    },
    {
        userId: "3eKwNl38WrS012PBUHpgwFd4gB92",
        firstName: "Akiel",
        lastName: "Romain",
        occupation: "Software Engineer ",
        level: "Advance",
        description: "Tall but a little shorter than Jael",
        desiredSalary: "10000",
        employerAccept: false,
        employerDeclined: false,
        employeeTeamId: null,
    },
];

let employers = [
    {
        userId: "1",
        name: "Fang Tech",
        type: "Mobile Development Studios",
        description: "A simple mobile development studios",
        teamId: "1",
    },
    {
        userId: "NRGa61GY2hgsBPJmU8dD3InosbX2",
        name: "Hyde",
        type: "Web Development Studios",
        description: "Simple and Fast",
        teamId: "NRGa61GY2hgsBPJmU8dD3InosbX2",
    },
];

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
    {
        userId: "2",
        firstName: "Tariq",
        lastName: "Romain",
        occupation: "Software Designer",
        level: "Advance",
        description: "Tall",
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
    employees.push({
        userId : req.body.userId,
        firstName : req.body.firstName,
        lastName: req.body.lastName,
        occupation: req.body.occupation,
        level: req.body.level,
        description: req.body.description,
        desiredSalary: req.body.desiredSalary
    })
    return res.status(200).send({ok: true});
})

app.get("/api/employeeslist", (req, res) => {
    res.send(employees)
})

app.get("/api/employee:id", (req, res) => {
    const { id } = req.params
    let employee = employees.filter((emp) => emp.userId === id)
    if (employee[0]) {
        res.send(employee);
    } else {
        res.status(404).send({ message: "User Not Found" });
    }
})

app.post("/api/employers", (req, res) => {
    employers.push({
        userId: req.body.userId,
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
    });
    return res.status(200).send({ ok: true });
})

app.get("/api/employerslist", (req, res) => {
    res.send(employers);
});

app.get("/api/employer:id", (req, res) => {
    const { id } = req.params;
    let employer = employers.filter((emp) => emp.userId === id);
    if(employer[0]){
        res.send(employer);
    }
    else{
        res.status(404).send({message: "User Not Found"})
    }
});

app.get("/api/suggestedTeam", (req, res) => {
    res.send(suggestedTeam);
});

app.get("/api/currentTeams", (req, res) => {
    res.send(currentTeams);
})

app.get("/api/team:id", (req, res) => {
    const { id } = req.params;
    let team = currentTeams.filter((team) => team.teamId === id);
    res.send(team[0]);
})

app.listen(port, () => {
    console.log(`Running on port ${5000}`);
})