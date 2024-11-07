const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Confirmacion = sequelize.define('confirmacion', {
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    horario: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Confirmacion;
};
