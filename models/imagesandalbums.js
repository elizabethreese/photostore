'use strict';
module.exports = (sequelize, DataTypes) => {
  const ImagesAndAlbums = sequelize.define('ImagesAndAlbums', {
    ImageId: DataTypes.INTEGER,
    AlbumId: DataTypes.INTEGER
  }, {});
  ImagesAndAlbums.associate = function (models) {
    ImagesAndAlbums.belongsTo(model.Image, { foreignKey: 'imageId' });
    ImagesAndAlbums.belongsTo(model.Album, { foreignKey: 'albumId' });
  };
  return ImagesAndAlbums;
};