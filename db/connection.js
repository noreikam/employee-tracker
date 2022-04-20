const mysql = require("mysql2");

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'NEAH87neahsql!',
        database: 'employee-tracker'
    }
);

module.exports = db;