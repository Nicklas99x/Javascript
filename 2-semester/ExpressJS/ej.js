const express = require('express');
const ejs = require('ejs');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // Generer to tilfældige heltal
  const x = Math.floor(Math.random() * 10) + 1;
  const y = Math.floor(Math.random() * 10) + 1;

  // Beregn produktet af de to tal
  const z = x * y;

  // Send data til EJS-template
  res.render('ej', { x, y, z });
});

app.listen(port, () => {
  console.log(`Serveren kører på http://localhost:${port}`);
});
