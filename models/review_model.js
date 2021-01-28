module.exports = function (sequelize, DataTypes) {
 

    const Review = sequelize.define("Review", {
      name: {type: DataTypes.STRING, allowNull = false},
      body: {type: DataTypes.TEXT, allowNull = false},
    rating: {type: DataTypes.INTEGER, allowNull = false, validate: {min:0, max:5}}})
  
      Review.associate -function(models){
        Review.hasMany(models.Comments, {onDelete: "cascade"})
        Review.hasMany(models.Customers, {onDelete: "cascade"})

        Review.belongsTo(models.Business, {foreignKey: {allowNull: false}})
      }
  
      
  
    return Review;
  };
  