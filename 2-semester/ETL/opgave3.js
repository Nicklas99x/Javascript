// server.js

const express = require('express');
// const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Endpoint for at søge efter ord på dansk
app.get('/search/danish/:word', async (req, res) => {
  const word = req.params.word;
  try {
    const response = await axios.get(`https://ordnet.dk/ddo/ordbog?query=${word}`);
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Endpoint for at søge efter ord på fransk
app.get('/search/french/:word', async (req, res) => {
  const word = req.params.word;
  try {
    const response = await axios.get(`https://fr.thefreedictionary.com/${word}`);
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
