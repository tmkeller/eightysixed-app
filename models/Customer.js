const bcrypt = require("bcrypt");

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
      validate: { isEmail: true },
    },
    password: DataTypes.STRING,
    pic: DataTypes.STRING
  });

  Customer.associate = function (models) {
    Customer.belongsTo(models.Business);
    Customer.hasMany(models.Comment, { onDelete: "cascade" });
    Customer.hasMany(models.Review)
  };

  Customer.beforeCreate(function (customer) {
     if (customer.password) {
       customer.password = bcrypt.hashSync(customer.password,
       bcrypt.genSaltSync(10),
       null)};

})
return Customer;
};
