module.exports = function (sequelize, DataTypes) {
 

  const Customer = sequelize.define("Customer", {
    firstName: {type: DataTypes.STRING, allowNull = false},
    lastName: {type: DataTypes.STRING, allowNull= false},
    email: DataTypes.STRING,
    passwords: DataTypes.STRING,
    picture: DataTypes.STRING})
    

    Customer.associate -function(models){
      Business.hasMany(models.review_model, {onDelete: "cascade"})
      Business.hasMany(models.comments_model, {onDelete: "cascade"})
    }

    

  return Customer;
};
