'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    userName: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};