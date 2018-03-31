
module.exports = function(sequelize, DataTypes){
    var Todo = sequelize.define("Todo", {
        // what the task entails
        text: DataTypes.STRING,
        // whether or not the task is complete
        complete: DataTypes.BOOLEAN
    });
    return Todo;
};