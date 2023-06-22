const inquirer = require('inquirer');
const sql = require('mysql2');

const db = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employees_db'
},
console.log('Connected to employee_db database.'));

db.connect((err) => {
    if (err) {
        throw err;
    }
    start();
});

