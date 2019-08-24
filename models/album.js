'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    AlbumId: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Album.associate = function (models) {
    // An album belongs to a user
    Album.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    // An album belongs to many images
    Album.belongsToMany(models.Image, { through: 'ImagesAndAlbums', foreignKey: 'imageId', as: 'images' });
  };
  return Album;
};