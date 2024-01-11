const mongoose = require("mongoose");

const conexion = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/prueba");
    //console.log("Conexion exitosa");
  } catch (error) {
    //console.log("Error en la conexión =>  ", error);
    throw new Error("No se ha podido conectar a la Base de datos !");
  }
};

module.exports = conexion;
