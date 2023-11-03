const fs = require('fs').promises;

function readFileAndCountLetters() {
  return fs.readFile('Checkliste-for-Fredag-24-03-2023.txt', 'utf-8')
    .then((data) => {
      const letterCount = countLetters(data);
      console.log(`Antal bogstaver i filen: ${letterCount}`);
    })
    .catch((error) => {
      console.error('Fejl ved indlæsning af filen:', error);
    });
}

function countLetters(text) {
  const onlyLetters = text.match(/\p{L}/gu, '');
  return onlyLetters.length;
}

readFileAndCountLetters();