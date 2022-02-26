'use strict';
module.exports = (sequelize, DataTypes) => {
  const Thai_provinces = sequelize.define('Thai_provinces', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    name_th: DataTypes.STRING,
    name_en: DataTypes.STRING,
    geography_id: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }, {});
  Thai_provinces.associate = function(models) {
    // associations can be defined here
  };
  return Thai_provinces;
};
