const { hashPassword, saveUser } = require('./hash'); // Stien til din hash-modulet

const express = require('express');
// Opret en Express-app
const app = express();
// Angiv en port til serveren
const port = 3000;

app.get('/', (req, res) => {
    res.send('Velkommen til min Express server!');
});

// Start serveren og lyt på den angivne port
app.listen(port, () => {
    console.log(`Serveren kører på http://localhost:${port}`);
});