const inquirer = require("inquirer");
const sql = require("mysql2");

const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "employees_db",
});

db.connect((err) => {
    if (err) throw err;
    else begin();
});

const begin = () => {
    inquirer
        .prompt({
            type: "list",
            name: "activity",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Departments",
                "View All Roles",
                "Add an Employee",
                "Add a Department",
                "Add a Role",
                "Update an Employee Role",
                "Exit",
            ],
        })
        .then((response) => {
            switch (response.activity) {
                case "View All Employees":
                    viewAllEmployees();
                    break;
                case "View All Departments":
                    viewAllDepartments();
                    break;
                case "View All Roles":
                    viewAllRoles();
                    break;
                case "Add an Employee":
                    break;
                case "Add a Department":
                    break;
                case "Add a Role":
                    break;
                case "Update an Employee Role":
                    break;
                case "Exit":
                    db.end();
                    break;
            }
        }) 
}

const viewAllEmployees = () => {
    db.query("SELECT * FROM employees", (err, res) => {
        if (err) throw err;
        console.table(res);
        begin();
    });
};

const viewAllDepartments = () => {
    db.query("SELECT * FROM departments", (err, res) => {
        if (err) throw err;
        console.table(res);
        begin();
    })
}

const viewAllRoles = () => {
    db.query("SELECT * FROM roles", (err, res) => {
        if (err) throw err;
        console.table(res);
        begin();
    })
}