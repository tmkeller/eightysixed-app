module.exports = function (sequelize, DataTypes) {
 
  const Business = sequelize.define("Business", {
    name: {type: DataTypes.STRING, allowNull = false},
    address: DataTypes.STRING,
    addresstwo: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    zip5: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    category: DataTypes.STRING,
    website: DataTypes.STRING,
    password: DataTypes.STRING,
    pic: DataTypes.STRING,
    email: {type: DataTypes.STRING, allowNull=false, validate: {isEmail: true}}
    })

    Business.associate -function(models){
      Business.hasMany(models.review_model, {onDelete: "cascade"})
    }
  return Business;
};
