const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define('User',{
    firstName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type:Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
});

Student.beforeCreate( (student) =>{
    const firstFirstChar= student.firstName[0];
    const lastFirstChar= student.lastName[0];
    student.firstName= firstFirstChar.toUpperCase() + student.firstName.slice(1);
    student.lastName=lastFirstChar.toUpperCase() + student.lastName.slice(1);
});
module.exports = Student;
