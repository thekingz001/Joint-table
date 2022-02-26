'use strict';
module.exports = (sequelize, DataTypes) => {
  const Thai_geographies = sequelize.define('Thai_geographies', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {});
  Thai_geographies.associate = function(models) {
    // associations can be defined here
    Thai_geographies.hasOne(models.Thai_provinces, {
      foreignKey: 'geography_id',
      as: 'provinces'
    });
  };
  return Thai_geographies;
};
