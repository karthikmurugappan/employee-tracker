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
                    addEmployee();
                    break;
                case "Add a Department":
                    addDepartment();
                    break;
                case "Add a Role":
                    addRole();
                    break;
                case "Update an Employee Role":
                    updateEmployeeRole();
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
        else console.table(res);
        begin();
    });
};

const viewAllDepartments = () => {
    db.query("SELECT * FROM departments", (err, res) => {
        if (err) throw err;
        else console.table(res);
        begin();
    })
}

const viewAllRoles = () => {
    db.query("SELECT * FROM roles", (err, res) => {
        if (err) throw err;
        else console.table(res);
        begin();
    })
}

const addEmployee = () => {
    inquirer
        .prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the Employee's First Name? ",
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the Employee's Last Name? ",
        },
        {
            type: "input",
            name: "role_id",
            message: "What is the Employee's Role ID? ",
        },
        {
            type: "input",
            name: "manager_id",
            message: "What is the Employee's Manager ID? ",
        },
        ])
        .then((response) => {
            db.query("INSERT INTO employees SET ?",
                {
                    first_name: response.first_name,
                    last_name: response.last_name,
                    role_id: response.role_id,
                    manager_id: response.manager_id,
                },
                (err, res) => {
                    if (err) throw err;
                    else console.log("Added New Employee Successfully!");
                    begin();
                }
            );
        });
};

const addDepartment = () => {
    inquirer
        .prompt(
        {
            type: "input",
            name: "department",
            message: "What is the name of your Department? ",
        })
        .then((response) => {
            db.query("INSERT INTO departments SET ?",
                { 
                    name: response.department,
                },
                (err, res) => {
                    if (err) throw err;
                    else console.log("Added New Department Successfully!");
                    begin();
                }
            );
        });
};

const addRole = () => {
    inquirer
        .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the name of the Role? ",
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary of the Role? ",
        },
        {
            type: "input",
            name: "department_id",
            message: "Which Department does the Role belong to? ",
        },
        ])
        .then((response) => {
            db.query("INSERT INTO roles SET ?",
                {
                    title: response.title,
                    salary: response.salary,
                    department_id: response.department_id,
                },
                (err, res) => {
                    if (err) throw err;
                    else console.log("Added New Role Successfully!");
                    begin();
                }
            );
        });
};

const updateEmployeeRole = () => {
    db.query("SELECT * FROM employees", (err, employees) => {
        if (err) throw err;
  
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'employeeId',
                message: 'Which employee\'s role do you want to update? ',
                choices: employees.map(member => ({ name: `${member.first_name} ${member.last_name}`, value: member.id })),
            },
            {
                type: 'input',
                name: 'roleId',
                message: 'Which Role ID do you want to assign the Selected Employee? ',
            },
        ])
        .then((answer) => {
            db.query('UPDATE employees SET ? WHERE ?',
            [{ 
                role_id: answer.roleId,
            },
            { 
                id: answer.employeeId,
            }],
            (err) => {
                if (err) throw err;
                else console.log('Updated the Employee Role Successfully!');
                begin();
            });
        });
    });
};