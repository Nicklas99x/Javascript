const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

const corsOptions = {
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500', 'http://127.0.0.1:5500/JSON-AJAX-Fetch/html.html', 'http://localhost:3000/upload'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
  };

app.use(cors(corsOptions));

// Middleware for parsing JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer configuration for file uploads
const upload = multer({ dest: 'uploads/' });

// Endpoint for uploading a file
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.status(200).send('File uploaded successfully.');
});

// Endpoint for downloading the uploaded file
app.get('/download/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'uploads/', req.params.filename);
  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).send('File not found.');
  }
});

// Endpoint for comparing uploaded and downloaded files
app.get('/compare/:filename', (req, res) => {
  const uploadedFilePath = path.join(__dirname, 'uploads/', req.params.filename);
  const downloadedFilePath = path.join(__dirname, 'downloads/', req.params.filename);

  if (!fs.existsSync(uploadedFilePath) || !fs.existsSync(downloadedFilePath)) {
    return res.status(404).send('Files not found.');
  }

  const uploadedData = fs.readFileSync(uploadedFilePath);
  const downloadedData = fs.readFileSync(downloadedFilePath);

  if (uploadedData.equals(downloadedData)) {
    res.status(200).send('Files are identical.');
  } else {
    res.status(200).send('Files are different.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
