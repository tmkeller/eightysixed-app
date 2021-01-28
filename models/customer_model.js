module.exports = function (sequelize, DataTypes) {
 

  const Customer = sequelize.define("Customer", {
    name: {type: DataTypes.STRING, allowNull = false},
    rating:{type: DataTypes.INTEGER, allowNull = false, validate: {min:0 , max:5 }},
    lastreview: DataTypes.TEXT, })
    

    Customer.associate -function(models){
      Business.hasMany(models.Post, {onDelete: "cascade"})
      Business.hasMany(models.Comments, {onDelete: "cascade"})
    }

    

  return Customer;
};
