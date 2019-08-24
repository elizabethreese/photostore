'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    ImageId: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Path: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
  };
  return Image;
};