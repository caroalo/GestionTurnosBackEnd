const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('confirmacion', {
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    horario: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
