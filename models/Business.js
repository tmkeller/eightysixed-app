const bcrypt = require("bcrypt");

module.exports = function (sequelize, DataTypes) {
  const Business = sequelize.define("Business", {
    name: { type: DataTypes.STRING, allowNull: false },
    address: DataTypes.STRING,
    addresstwo: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    zip5: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    category: DataTypes.STRING,
    website: DataTypes.STRING,
    password: DataTypes.STRING,
    pic: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true },
    },
  });

  Business.associate = function (models) {
    Business.hasMany(models.Review);
    Business.hasMany(models.Comment);
  };

  Business.beforeCreate(function (business) {
    business.password = bcrypt.hashSync(
      business.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  return Business;
};
