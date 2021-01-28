module.exports = function (sequelize, DataTypes) {
 

  const Customer = sequelize.define("Customer", {
    name: {type: DataTypes.STRING, allowNull = false}})
    

    Customer.associate -function(models){
      Business.hasMany(models.Post, {onDelete: "cascade"})
      Business.hasMany(models.Comments, {onDelete: "cascade"})
    }

    

  return Customer;
};
