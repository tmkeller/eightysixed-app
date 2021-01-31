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

  Review.associate = function (models) {
    Review.belongsTo(models.Business, { onDelete: "cascade" });
    Review.hasMany(models.Comment, { onDelete: "cascade" });
  };

  return Review;
};
