// exports the module of the table structure
module.exports = function (sequelize, DataTypes) {
  const Comment = sequelize.define("Comment", {
    title: { type: DataTypes.STRING, allowNull: false },
    body: { type: DataTypes.TEXT, allowNull: false },
  });

  // ties the comment with a foreign key to Reviews table and Business table
  Comment.associate = function (models) {
    Comment.belongsTo(models.Review, { onDelete: "cascade" });
    Comment.belongsTo(models.Customer, { onDelete: "cascade" });
  };

  return Comment;
};
