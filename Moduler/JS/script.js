// const http = require('http');

// http.createServer(callback).listen(8080);

// function callback(request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     let t = "";

//     for (let x in request) {
//         t += x + ": ";
//         if (typeof request[x] === "object") t += "object"; else t += String(request[x]);
//         t += "<br> <br>";
//     }

//     response.write("<h6>" + t + "</h6>");
//     response.end();
// }

const http = require('http');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const distanceCalculator = require('./module');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    const formPath = path.join(__dirname, 'moduler.html');
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
        const parsedData = qs.parse(requestBody);
        const x1 = parseFloat(parsedData.x1);
        const y1 = parseFloat(parsedData.y1);
        const x2 = parseFloat(parsedData.x2);
        const y2 = parseFloat(parsedData.y2);
  
        const point1 = { x: x1, y: y1 };
        const point2 = { x: x2, y: y2 };
  
        const distance = distanceCalculator(point1, point2);
  
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`Afstanden mellem punkt1 og punkt2 er: ${distance}`);
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
