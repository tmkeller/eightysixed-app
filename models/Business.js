// adds the bcrypt npm and requires it
const bcrypt = require("bcrypt");

// exports the module of the table structure
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true },
    },
    password: DataTypes.STRING,
    profilePic: DataTypes.STRING,
  });

  // allows foreign keys to be attached through the business id
  Business.associate = function (models) {
    Business.hasMany(models.Review, { onDelete: "cascade" });
    Business.hasMany(models.Customer);
  };
  // adds encryption  for password and sets it as base 10
  Business.beforeCreate(function (business) {
    business.password = bcrypt.hashSync(
      business.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  Business.beforeUpdate(function (business) {
    business.password = bcrypt.hashSync(
      business.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  return Business;
};
