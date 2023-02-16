const express = require("express");
const app = express();

app.get("/makers/:nombre", (req, res) => {
  let nombre = req.params.nombre ? req.params.nombre : null;
  res.send(`<h1>Hola ${nombre}!</h1>`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
