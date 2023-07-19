const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Genres', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaulValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    freezeTableName:true,
    timestamps: false
  }
  );
};
