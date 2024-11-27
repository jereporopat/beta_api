const {Sequelize, Model, DataTypes} = require("sequelize");
const fs = require('fs');
const mysql = require('mysql2');
const path = require('path'); // Importar el módulo path

const sequelize = new Sequelize("testThings", "avnadmin", "AVNS_yOObCbrFr6kgPbOqbJZ", {
    host: "bdd-aiven-jereporopat-bdd.l.aivencloud.com",
    dialect: "mysql",
    port: 18365,
    ssl: true,
    dialectOptions:{
        ssl:{
            rejectUnauthorized: true,
            ca: fs.readFileSync(path.join(__dirname, './ca.pem')).toString()
        }
    }
});

module.exports = sequelize;