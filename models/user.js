'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    UserId: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Login: DataTypes.STRING,
    PasswordHash: DataTypes.STRING,
    Email: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    // User has many images
    User.hasMany(models.Image, { as: 'images' });
    // User has many albums
    User.hasMany(models.Album, { as: 'albums' });
  };
  return User;
};