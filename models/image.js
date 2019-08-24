'use strict';
module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define('image', {
    imageId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    path: DataTypes.STRING,
    albumId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  image.associate = function(models) {
    // associations can be defined here
  };
  return image;
};