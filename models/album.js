'use strict';
module.exports = (sequelize, DataTypes) => {
  const album = sequelize.define('album', {
    albumId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    imageId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  album.associate = function(models) {
    // associations can be defined here
  };
  return album;
};