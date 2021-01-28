module.exports = function (sequelize, DataTypes) {
 

    const Comment = sequelize.define("Comment", {
      tile: {type: DataTypes.STRING, allowNull = false},
      body:{type: DataTypes.TEXT, allowNull = false}})
      
  
      Customer.associate -function(models){
        Business.hasMany(models.Post, {onDelete: "cascade"})
        Business.hasMany(models.Comments, {onDelete: "cascade"})
      }
  
      
  
    return Comment;
  };