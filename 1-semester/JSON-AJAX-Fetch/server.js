const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const crypto = require('crypto');

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

const downloadsDir = path.join(__dirname, 'downloads');
if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir);
}

// Endpoint for uploading a file
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const uploadedFilePath = path.join(__dirname, 'uploads/', req.file.originalname);
  const downloadedFilePath = path.join(__dirname, 'downloads/', req.file.originalname);

  // Kopier filen fra midlertidig uploads-mappen til downloads-mappen
  fs.copyFileSync(uploadedFilePath, downloadedFilePath);

  res.status(200).send('File uploaded successfully.');
});



// Endpoint for downloading the uploaded file
app.get('/download/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'downloads/', req.params.filename);
  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).send('File not found.');
  }
});

app.post('/compare/:filename', (req, res) => {
  const { hash } = req.body;
  const uploadedFilePath = path.join(__dirname, 'uploads/', req.params.filename);
  const downloadedFilePath = path.join(__dirname, 'downloads/', req.params.filename);

  // Funktion til at beregne hash-værdi af en fil
  const calculateFileHash = (filePath) => {
    return new Promise((resolve, reject) => {
      const hash = crypto.createHash('sha256');
      const input = fs.createReadStream(filePath);

      input.on('error', (err) => {
        reject(err);
      });

      hash.setEncoding('hex');

      input.pipe(hash);

      input.on('end', () => {
        hash.end();
        resolve(hash.read());
      });
    });
  };

  // Sammenlign hash-værdierne
  Promise.all([calculateFileHash(uploadedFilePath), calculateFileHash(downloadedFilePath)])
    .then(([uploadedFileHash, downloadedFileHash]) => {
      if (uploadedFileHash === hash && downloadedFileHash === hash) {
        res.status(200).send('Files are identical.');
      } else {
        res.status(200).send('Files are different.');
      }
    })
    .catch((error) => {
      res.status(500).send('An error occurred while comparing files.');
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});