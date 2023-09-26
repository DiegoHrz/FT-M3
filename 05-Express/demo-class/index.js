// const http = require("http");
// http
//   .createServer((req, res) => {
//     if (req.url === "/") {
//       res.writeHead(200, { "Content-type": "text/plain" }).end('me creaton con http');
//     }
//   })
//   .listen(3001);

//creo el server y lo ejecuto
const express = require('express')
const server = express();
const morgan = require("morgan");

server.use(express.json())
server.use(morgan("dev"));

server.get("/", (req, res) => {
  res.send("esta ruta fue creada con express");
  //send es ideal para strings
});

server.get("/users/:id/:name", (req, res) => {
  // es lo mismo que const id = req.params.id
  const { id, name } = req.params;

  //los valores en la url son strings
  if (id == 23 && name === "dai") {
    const infoUser = {
      cohorte: "37a",
      name: "Dai",
      id: 23,
      alumnos: "muchos",
    };
    return res.json(infoUser); // es ideal para ver la respt como JSON
    // cuando hago esto se envia un status(200) por default
    //res.send(infoUser)
  }
  return res.status(404).send("hubo un error");
});

server.get("/user", (req, res) => {
  const { name } = req.query;
  if (name) {
    return res.send(`aca mandariamos info especifica de usuarios`);
  }
  res.send("mando a todos los usuarios");
});

const users = [];
let id = 0;
server.post("/posteo", (req, res) => {
  console.log(req.body);
  const { name, alumnos } = req.body;

  const newUser = {
    id: ++id,
    name,
    alumnos,
  };
  users.push(newUser);
  res.json(users);
});

server.listen(3001, () => {
  console.log("Server listen on port 3001");
});
