module.exports = function (sequelize, DataTypes) {
 

    const Comment = sequelize.define("Comment", {
      tile: {type: DataTypes.STRING, allowNull = false},
      body:{type: DataTypes.TEXT, allowNull = false}})
      
  
      Customer.associate -function(models){
        Business.hasMany(models.review_model, {onDelete: "cascade"})
        Business.hasMany(models.comment_models, {onDelete: "cascade"})
      }
  
      
  
    return Comment;
  };