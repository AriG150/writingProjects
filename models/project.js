'use strict';
module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('project', {
    name: DataTypes.STRING,
    entryId: DataTypes.INTEGER,
    promptId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  project.associate = function(models) {
    // associations can be defined here
    models.project.belongsTo(models.user);
    models.project.belongsTo(models.prompt);
    models.project.hasMany(models.entry);
  };
  return project;
};