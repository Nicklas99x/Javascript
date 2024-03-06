const express = require('U:/undervisning/IBA/2. sem/JS 2/02 Express/node_modules/express');
const app = express();
const port = 3000;
app.use("/",express.static("U:/undervisning/IBA/2. sem/JS 2/09 WASM"));
app.listen(port, () => {
  console.log(`Serveren kører på http://localhost:${port}`);
});
