module.exports = async () => {
    const mysql = require('promise-mysql2');
    let connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "passwrd",
            database: "users"
    
    });
    return connection;

}

