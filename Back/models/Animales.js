const { Schema, model } = require("mongoose");
const Animales = Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { collection: "animales" }
);
module.exports = model("Animales", Animales, "animales");
