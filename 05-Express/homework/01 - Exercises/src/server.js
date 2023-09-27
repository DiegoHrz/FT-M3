const express = require("express");

let publications = [];
let id = 1

const server = express();

server.use(express.json());

server.post("/posts", (req, res) => {
  const { author, title, contents } = req.body;
  if (author && title && contents) {
    const publication = {
        author,
        title,
        contents,
        id: id++,
    }
    publications.push(publication)
    return res.json(publications)
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
