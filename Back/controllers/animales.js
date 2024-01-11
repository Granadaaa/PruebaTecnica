let Animales = require("../models/Animales");

const listarAnimales = async (req, res) => {
  try {
    let busqueda = req.params.busqueda;
    let consulta = await Animales.find({
      $or: [
        { nombre: new RegExp(busqueda, "i") },
        { descripcion: new RegExp(busqueda, "i") },
      ],
    }).exec();

    if (consulta.length > 0) {
      return res.status(200).send({
        id: 200,
        Encabezado: "Correcto",
        mensaje: "Animal encontrado correctamente",
        respuesta: consulta,
      });
    } else {
      return res.status(404).send({
        id: 404,
        Encabezado: "Correcto",
        mensaje: "No se encontraron animales",
        respuesta: [],
      });
    }
  } catch (error) {
    return res.status(500).send({
      id: 500,
      Encabezado: "Error",
      mensaje: "Error de Consulta: " + error.message,
    });
  }
};

module.exports = {
  listarAnimales,
};
