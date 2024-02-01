const express = require('express');
const app = express();
const port = 5000;
const path = require('path');

app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
});

app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    if (req.method === 'POST' && req.url === '/generateTable') {
      const height = parseInt(req.body.height);
      const width = parseInt(req.body.width);
      if (isNaN(height) || isNaN(width) || height < 0 || width < 0 || height > 50000 || width > 50000) {
        return res.status(418).send('Negative numbers can not make up a table');
      }
    }
    next();
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/generateTable', (req, res) => {
    const height = parseInt(req.body.height);
    const width = parseInt(req.body.width);

    if (isNaN(height) || isNaN(width)) {
        throw new Error('Invalid dimensions. Please enter valid numbers.');
    }

    const tableData = generateRandomTable(height, width);

    res.render('table', { tableData });
});

app.use((req, res) => {
    res.status(404).send('Not found');
});

app.use((req, res) => {
    res.status(500).send('Internval server error');
});

function generateRandomTable(height, width){
    const table = [];

    for(i = 0; i < height; i++){
        const row = [];

        for(j=0; j < width; j++){
            row.push(Math.floor(Math.random() * 1001));
        }
        table.push(row);
    }
    return table;
}

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });