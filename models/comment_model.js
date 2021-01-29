module.exports = function (sequelize, DataTypes) {
  const Comment = sequelize.define("Comment", {
    title: { type: DataTypes.STRING, allowNull: false },
    body: { type: DataTypes.TEXT, allowNull: false },
  });

  Comment.associate = function (models) {
    Comment.belongsTo(models.Review, { onDelete: "cascade" });
    Comment.belongsTo(models.Customer, { onDelete: "cascade" });
  };

  return Comment;
};
