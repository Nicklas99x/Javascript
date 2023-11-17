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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Angiver uploads-mappen som destinationsmappen
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Gemmer filen med dens originale navn
  }
});

const upload = multer({ storage: storage });

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

function getFileBytes(filePath) {
  const fileData = fs.readFileSync(filePath);
  const fileBytes = [...fileData];
  return fileBytes;
}

// Sammenlign funktion for at sammenligne to sæt af bytes
function compareBytes(file1Bytes, file2Bytes) {
  if (file1Bytes.length !== file2Bytes.length) {
    return false; // Hvis længden ikke er den samme, er filerne forskellige
  }

  for (let i = 0; i < file1Bytes.length; i++) {
    if (file1Bytes[i] !== file2Bytes[i]) {
      return false; // Hvis et element ikke matcher, er filerne forskellige
    }
  }

  return true; // Hvis alle bytes matcher, er filerne ens
}

app.get('/compare/:filename', (req, res) => {
  const uploadedFilePath = path.join(__dirname, 'uploads/', req.params.filename);
  const downloadedFilePath = path.join(__dirname, 'downloads/', req.params.filename);

  if (!fs.existsSync(uploadedFilePath) || !fs.existsSync(downloadedFilePath)) {
    return res.status(404).send('Files not found.');
  }

  const uploadedFileBytes = getFileBytes(uploadedFilePath);
  const downloadedFileBytes = getFileBytes(downloadedFilePath);

  const areEqual = compareBytes(uploadedFileBytes, downloadedFileBytes);
  if (areEqual) {
    res.status(200).send('Files are identical.');
  } else {
    res.status(200).send('Files are different.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});