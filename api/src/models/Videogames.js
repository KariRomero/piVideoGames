const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogames', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.STRING,
      allowNull:false
    },
    platforms:{
      type:  DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false
    },
    image:{
      type:  DataTypes.STRING,
      allowNull: true      
    },
    released:{
      type:  DataTypes.STRING,
      allowNull:false
    },
    rating:{
      type: DataTypes.DECIMAL,
      allowNull:false
    }
    
  },
  {
    freezeTableName:true,
    timestamps: false
  }
  );
};


