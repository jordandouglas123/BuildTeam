module.exports = async () => {
    const mysql = require('promise-mysql2');
    let connection = await mysql.createConnection({
            host: "us-cdbr-east-05.cleardb.net",
            user: "b66fc3ccca05d0",
            password: "ea3b0f54",
            database: "heroku_1aabc12bcbbe678"
    
    });
    return connection;

}

