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
            ca: fs.readFileSync(path.join(__dirname, '../config/ca.pem')).toString()
        }
    }
});

class Product extends Model {}

Product.init({
    product_id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false,
    },
    is_stock:{
        type: DataTypes.BOOLEAN,
    }
}, {
    sequelize,
    modelName: "Product",
    }
);

module.exports = Product;
// async function testConnection(){
//     try{
//         await sequelize.authenticate();
//         console.log("Todo bien")
//     }catch(err){
//         console.error("Todo mal", err)
//     }
// }

// testConnection();