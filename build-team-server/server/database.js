module.exports = () => {
    const mysql = require('mysql');
    let connection = mysql.createConnection({
        host: "us-cdbr-east-05.cleardb.net",
        user: "b66fc3ccca05d0",
        password: "ea3b0f54",
        database: "heroku_1aabc12bcbbe678",
    });
    return connection;

}

