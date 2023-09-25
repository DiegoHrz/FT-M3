// const http = require("http");
// http
//   .createServer((req, res) => {
//     if (req.url === "/") {
//       res.writeHead(200, { "Content-type": "text/plain" }).end('me creaton con http');
//     }
//   })
//   .listen(3001);

//creo el server y lo ejecuto
const server = require("express")();

server.get("/", (req, res) => {
  res.send("esta ruta fue creada con express");
});

server.get("/users/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
});

server.listen(3001, () => {
  console.log("Server listen on port 3001");
});
