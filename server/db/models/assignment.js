'use strict';
module.exports = function(sequelize, DataTypes) {
  var Assignment = sequelize.define('assignment', {
    instructions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    file: {
      type: DataTypes.STRING,
      allowNull: true
    },
    exercises: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    due: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      isDate: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        Assignment.belongsTo(models.class);
        Assignment.belongsTo(models.lesson);
        Assignment.hasMany(models.work);
      }
    }
  });
  return Assignment;
};