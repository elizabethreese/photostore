'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    AlbumId: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
  };
  return Album;
};