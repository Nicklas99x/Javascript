const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/side1', (req, res) => {
    res.sendFile(__dirname + '/public/side1.html');
});
app.get('/side2', (req, res) => {
    res.sendFile(__dirname + '/public/side2.html');
});
app.listen(port, () => {
    console.log(`Server kører på http://localhost:${port}`);
});