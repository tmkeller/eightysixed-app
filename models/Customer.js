const bcrypt = require("bcrypt");

module.exports = function (sequelize, DataTypes) {
  const Customer = sequelize.define("Customer", {
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    isClaimed: { type: DataTypes.BOOLEAN, allowNull: false, default: 0 },
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip5: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    pic: DataTypes.STRING,
  });

  Customer.associate = function (models) {
    Customer.hasMany(models.Comment, { onDelete: "cascade" });
    Customer.hasMany(models.Review)
    Customer.belongsTo(models.Business)
  };

  // Customer.beforeCreate(function (customer) {
  //   customer.password = bcrypt.hashSync(
  //     customer.password,
  //     bcrypt.genSaltSync(10),
  //     null
  //   );
  // });
  return Customer;
};
