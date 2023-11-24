const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500', 'http://127.0.0.1:5500/JSON-AJAX-Fetch/html.html', 'http://localhost:3000/upload'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
}));

// Ordbogs URL'er
const endpoint1 = 'https://ordnet.dk/ddo/ordbog?query=';
const endpoint2 = 'https://www.thefreedictionary.com/';

async function getFetch() {
  try {
    const fetch = await import('node-fetch');
    return fetch.default;
  } catch (err) {
    console.error('Fejl ved indlæsning af node-fetch:', err);
    return null;
  }
}

app.get('/hentOrdFraEndpoint1/:word', async (req, res) => {
    const { word } = req.params;
    const fetch = await getFetch();
    if (!fetch) {
        res.status(500).json({ error: 'Anmodning mislykkedes' });
        return;
    }
    try {
        const response = await fetch(endpoint1 + word);
        if (!response.ok) {
            throw new Error('Anmodning mislykkedes: ' + response.statusText);
        }
        const contentType = response.headers.get('content-type');
        console.log('Content-Type:', contentType);
        console.log('Hele responsobjektet:', response);
        
        // Håndtering af HTML-data
        const data = await response.text();
        res.json({ htmlData: data });
    } catch (error) {
        console.error('Fejl ved anmodning:', error);
        res.status(500).json({ error: 'Anmodning mislykkedes' });
    }
});


// Endpoint for at hente ord fra det andet endpoint
app.get('/hentOrdFraEndpoint2/:word', async (req, res) => {
  const { word } = req.params;
  const fetch = await getFetch();
  if (!fetch) {
    res.status(500).json({ error: 'Anmodning mislykkedes' });
    return;
  }
  try {
    const response = await fetch(endpoint2 + word);
    const data = await response.text();
    res.send(data);
  } catch (error) {
    res.status(500).json({ error: 'Anmodning mislykkedes' });
  }
});

// Start serveren
app.listen(PORT, () => {
  console.log(`Server kører på port ${PORT}`);
});
