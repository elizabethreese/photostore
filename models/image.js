'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    ImageId: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Path: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Image.associate = function (models) {
    // An image belongs to a user
    Image.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    // An image belongs to many albums
    Image.belongsToMany(models.Album, { through: 'ImagesAndAlbums', foreignKey: 'albumId', as: 'albums' });
  };
  return Image;
};