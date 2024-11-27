const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.config");

class Movie extends Model {}

Movie.init({
    movie_id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    movie_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    movie_genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status:{
        type: DataTypes.BOOLEAN,
    }
}, {
    sequelize,
    modelName: "Movie",
    }
);

module.exports = Movie;


// async function testConnection(){
//     try{
//         await sequelize.authenticate();
//         console.log("Todo bien")
//     }catch(err){
//         console.error("Todo mal", err)
//     }
// }

// testConnection();