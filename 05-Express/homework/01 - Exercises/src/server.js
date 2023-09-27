const express = require("express");

let publications = [];

const server = express();

server.use(express.json());

server.put("/posts", (req, res) => {
  const { author, title, contents } = req.params;
  if (author && title && contents) {
  }
  return res
    .status(404)
    .json({
      error:
        "No se recibieron los parámetros necesarios para crear la publicación",
    });
});

//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
