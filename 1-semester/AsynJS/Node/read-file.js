const fs = require('fs').promises;

async function countLettersInFile() {
    try {
        const fileContent = await fs.readFile('Checkliste-for-Fredag-24-03-2023.txt', 'utf8');
        const letterCount = countLetters(fileContent);
        console.log(`Antal bogstaver i filen: ${letterCount}`);
    } catch (error) {
        console.error('Fejl ved indlæsning af filen.', error);
    }
}

function countLetters(text) {
    const letters = text.match(/\p{L}/gu, '');
    return letters ? letters.length : 0;
}

countLettersInFile();
