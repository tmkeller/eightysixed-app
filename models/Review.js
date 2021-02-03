// exports the module of the table structure
module.exports = function (sequelize, DataTypes) {
  const Review = sequelize.define("Review", {
    title: { type: DataTypes.STRING, allowNull: false },
    body: { type: DataTypes.TEXT, allowNull: false },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 0, max: 10 },
    },
    pic: DataTypes.STRING,
    pictwo: DataTypes.STRING,
  });

  // ties the Customer with a foreign key to the Business table and the Customer table connects them to Comment
  Review.associate = function (models) {
    Review.belongsTo(models.Business, { onDelete: "cascade" });
    Review.belongsTo(models.Customer, { onDelete: "cascade" });
    Review.hasMany(models.Comment, { onDelete: "cascade" });
  };

  return Review;
};
