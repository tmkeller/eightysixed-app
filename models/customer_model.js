module.exports = function (sequelize, DataTypes) {
  const Customer = sequelize.define("Customer", {
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    pic: DataTypes.STRING,
  });

  Customer.associate -
    function (models) {
      Business.hasMany(models.review_model, { onDelete: "cascade" });
      Business.hasMany(models.comment_model, { onDelete: "cascade" });
    };

  return Customer;
};
