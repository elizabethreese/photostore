'use strict';
module.exports = (sequelize, DataTypes) => {
  const ImagesAndAlbums = sequelize.define('ImagesAndAlbums', {
    ImageId: DataTypes.INTEGER,
    AlbumId: DataTypes.INTEGER
  }, {});
  ImagesAndAlbums.associate = function(models) {
    // associations can be defined here
  };
  return ImagesAndAlbums;
};