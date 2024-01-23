const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'server.log');

// Omdiriger serverloggen til en fil
const logStream = fs.createWriteStream(logFile, { flags: 'a' });
console.log = function (message) {
  logStream.write(`${new Date().toISOString()}: ${message}\n`);
};

// Nu vil alle console.log-meddelelser blive logget til server.log
