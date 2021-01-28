module.exports = function (sequelize, DataTypes) {
 
    const Comment = sequelize.define("Comment", {
      title: {type: DataTypes.STRING, allowNull = false},
      body:{type: DataTypes.TEXT, allowNull = false}})
      
      Customer.associate -function(models){
        Business.hasMany(models.review_model, {onDelete: "cascade"})
        Business.hasMany(models.comment_model, {onDelete: "cascade"})
      }
  
    return Comment;

  };