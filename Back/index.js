const conexion = require("./models/conexion");
const express = require("express");
const cors = require("cors");

conexion();

const app = express();
const puerto = 3900;

app.use(cors());
//convertir body de las peticiones a json
app.use(express.json());
//recibir body de los formularios
app.use(express.urlencoded({ extended: true }));

const rutaAnimales = require("./routes/animales");

app.use("/api", rutaAnimales);

app.listen(puerto, () => {
  console.log("server ejecutandose", puerto);
});
