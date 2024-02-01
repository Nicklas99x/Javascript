const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;

const app = express();
const port = 3000;

// Tillad alle oprindelser (dette kan ændres baseret på dine behov)
app.use(cors());

app.get('/json', async (req, res) => {
  const csvFilePath = 'Deutsche_Bahn.csv';

  try {
    // Læs .csv-fil
    const csvData = await fs.readFile(csvFilePath, 'utf-8');

    // Konverter CSV til JSON og fjern semikolon
    const jsonArray = csvToJson(csvData);
    const jsonString = JSON.stringify(jsonArray, null, 2).replace(/;/g, '');

    // Konsollog JSON-strengen med indrykning og linjeskift
    console.log('Modtaget JSON:\n', jsonString);

    // Send JSON til klienten med indrykning og linjeskift
    res.header('Content-Type', 'application/json').send(jsonString);
  } catch (error) {
    console.error('Fejl ved konvertering af CSV til JSON:', error);
    res.status(500).send('Serverfejl');
  }
});

function csvToJson(csvData) {
  const lines = csvData.trim().split('\n');
  const headers = lines[0].split(';');

  return lines.slice(1).map(line => {
    const values = line.split(';');
    const obj = {};

    headers.forEach((header, index) => {
      obj[header.trim()] = values[index].trim();
    });

    return obj;
  });
}

app.listen(port, () => {
  console.log(`Server kører på http://localhost:${port}`);
});
