const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.config");

class Director extends Model {}

Director.init({
    director_id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    director_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    director_surname: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: "Director",
    }
);

module.exports = Director;


// async function testConnection(){
//     try{
//         await sequelize.authenticate();
//         console.log("Todo bien")
//     }catch(err){
//         console.error("Todo mal", err)
//     }
// }

// testConnection();