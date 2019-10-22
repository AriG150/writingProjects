'use strict';
module.exports = (sequelize, DataTypes) => {
  const entry = sequelize.define('entry', {
    text: DataTypes.STRING,
    projectId: DataTypes.INTEGER
  }, {});
  entry.associate = function(models) {
    // associations can be defined here
    models.entry.belongsTo(models.project)
  };
  return entry;
};