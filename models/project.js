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
    models.projects.belongsTo(models.prompt);
    models.projects.hasMany(models.entry);
  };
  return project;
};