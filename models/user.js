'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    UserId: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Login: DataTypes.STRING,
    PasswordHash: DataTypes.STRING,
    Email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};