const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

// Definér stien til JSON-filen, hvor brugernavne og hashede adgangskoder gemmes
const usersFilePath = path.join(__dirname, 'users.json');

// Funktion til at hash'e et password
async function hashPassword(password) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

// Funktion til at gemme et brugernavn og hashet password i JSON-filen
function saveUser(username, hashedPassword) {
    // Læs eksisterende data fra JSON-filen
    let usersData = [];
    try {
        const data = fs.readFileSync(usersFilePath, 'utf8');
        usersData = JSON.parse(data);
    } catch (err) {
        // Hvis filen ikke findes, skal der ikke gøres noget
    }

    // Tilføj det nye brugernavn og hashede password til data
    usersData.push({ username, password: hashedPassword });

    // Gem data til JSON-filen
    fs.writeFileSync(usersFilePath, JSON.stringify(usersData, null, 4));
}

module.exports = { hashPassword, saveUser };