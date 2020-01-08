'use strict';
module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define('posts', {
    PostId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    Title: DataTypes.STRING,
    Body: DataTypes.STRING
  }, {});
  posts.associate = function(models) {
    // associations can be defined here
  };
  return posts;
};