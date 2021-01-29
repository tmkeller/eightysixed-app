module.exports = function (sequelize, DataTypes) {
  const Comment = sequelize.define("Comment", {
    title: { type: DataTypes.STRING, allowNull: false },
    body: { type: DataTypes.TEXT, allowNull: false },
  });

  Comment.associate = function (models) {
    Business.hasMany(models.Review, { onDelete: "cascade" });
    Business.hasMany(models.Comment, { onDelete: "cascade" });
  };

  return Comment;
};
