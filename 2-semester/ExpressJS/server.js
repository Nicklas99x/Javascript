const express = require('express');
const app = express();
const port = 3000; // port kan ændres
//Check requests
app.use((req, res, next) => {
    //Tillad alle anmodninger for at undgå CORS problemer
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
//Endpoint der eksekveres
app.get('/', (req, res) => {
    //Blå overskrift
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                h1 {
                    color: blue;
                }
            </style>
        </head>
        <body>
            <h1>Velkommen til denne side!</h1>
        </body>
        </html>
    `;
    // Sender HTML som respons
    res.send(html);
});
app.listen(port, () => {
    console.log(`Server kører på http://localhost:${port}`);
});