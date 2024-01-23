const http = require('http');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    const formPath = path.join(__dirname, 'brugerdata.html');
    fs.readFile(formPath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.method === 'POST' && req.url === '/calculate') {
    let requestBody = '';

    req.on('data', (data) => {
      requestBody += data;
    });

    req.on('end', () => {
      // Gem data i en tekstfil
      const dataToSave = qs.parse(requestBody);

      // Definer stien til tekstfilen, hvor dataen skal gemmes
      const filePath = path.join(__dirname, 'gemt_data.txt');

      // Skriv dataen til tekstfilen
      fs.writeFile(filePath, JSON.stringify(dataToSave, null, 2), (err) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/html' });
          res.end('Fejl under lagring af data');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('Data gemt med succes');
        }
      });
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Siden blev ikke fundet');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Serveren kører på http://localhost:${port}`);
});
