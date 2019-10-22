'use strict';
module.exports = (sequelize, DataTypes) => {
  const prompt = sequelize.define('prompt', {
    text: DataTypes.STRING
  }, {});
  prompt.associate = function(models) {
    // associations can be defined here
    models.prompt.hasMany(models.project)
  };
  return prompt;
};