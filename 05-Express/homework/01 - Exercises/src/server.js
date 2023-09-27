const express = require("express");

let publications = [];
// let id = 1;

const server = express();

server.use(express.json());

server.post("/posts", (req, res) => {
  const { id, author, title, contents } = req.body;
  if (author && title && contents && id) {
    // const publication = {
    //   author,
    //   title,
    //   contents,
    //   id: id++,
    // };
    publications.push(req.body);
    return res.status(200).json(publications);
  }
  return res.status(404).json({
    error:
      "No se recibieron los parámetros necesarios para crear la publicación",
  });
});

server.get("/posts", (req, res) => {
  const { author, title } = req.query;
  if (author && title) {
    const publicationsFiltered = publications.filter(
      pub => pub.author === author && pub.title === title
    );
    if (publicationsFiltered.length) {
      return res.status(200).json(publicationsFiltered);
    } else {
      return res.status(404).json({
        error:
          "No existe ninguna publicación con dicho título y autor indicado",
      });
    }
  }
});

server.get("/posts/:author", (req, res) => {
  //no se necesita el if del author porque params no podria entrar a esta ruta si noe existiera de todos modos mientras que en query si
  const {author} = req.params;
  if (author) {
    const filteredPosts = publications.filter(post => post.author === author)
    if(filteredPosts.length) return res.status(200).json(filteredPosts)
    return res
    .status(404)
    .json({ error: "No existe ninguna publicación del autor indicado" });
  }

});

server.put('/posts/:id',(req, res)=>{
    const {title, contents} = req.body
    if(title, contents){
        
    }
})

// server.delete('/posts/:id',(req, res)=>{
//     const {id} = req.params
// })

//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
