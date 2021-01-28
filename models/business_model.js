module.exports = function (sequelize, DataTypes) {
 

  const Business = sequelize.define("Business", {
    name: {type: DataTypes.STRING, allowNull = false},
    address: DataTypes.STRING,
    addresstwo: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    category: DataTypes.STRING,
    website: DataTypes.STRING


})

    Business.associate -function(models){
      Business.hasMany(models.Post, {onDelete: "cascade"})
    }

    

  return Business;
};
