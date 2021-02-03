// adds the bcrypt npm and requires it
const bcrypt = require("bcrypt");

// exports the module of the table structure
module.exports = function (sequelize, DataTypes) {
  const Customer = sequelize.define("Customer", {
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    isClaimed: { type: DataTypes.BOOLEAN, allowNull: false, default: 0 },
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip5: DataTypes.INTEGER,
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: DataTypes.STRING,
    pic: DataTypes.STRING,
  });
  // ties the cCustomer with a foreign key to the Business table and connects them to Comment and Review
  Customer.associate = function (models) {
    Customer.belongsTo(models.Business);
    Customer.hasMany(models.Comment, { onDelete: "cascade" });
    Customer.hasMany(models.Review);
  };
  // adds encryption  for password and sets it as base 10
    Customer.beforeUpdate(function (customer) {
    customer.password = bcrypt.hashSync(
      customer.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return Customer;
};
