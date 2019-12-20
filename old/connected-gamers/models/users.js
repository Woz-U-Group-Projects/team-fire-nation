'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    UserId: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    FirstName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(45),
      unique: true
    },
    Username: {
      type: DataTypes.STRING(45),
      unique: true
    },
    Password: {
      type: DataTypes.STRING(45),
      unique: true
    },
    Bio: {
      type: DataTypes.STRING(150),
      unique: true
    }
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};


