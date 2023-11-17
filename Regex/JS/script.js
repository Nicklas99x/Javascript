function checkDanishPhoneNumber(input) {
    // Regex pattern for validating Danish phone numbers
    const regex = /^\s*(?![0])(?:\d{8}|\d{4}\s\d{4}|\d{2}\s\d{2}\s\d{2}\s\d{2})\s*$/;
  
    // Test input against the regex pattern
    return regex.test(input);
}

// Prompt brugeren for input
const userInput = prompt("Indtast et dansk telefonnummer (format: XXXXXXXX, XXXX XXXX eller XX XX XX XX):");

// Valider input og vis resultat
if (userInput) {
    const isValidPhoneNumber = checkDanishPhoneNumber(userInput);
    if (isValidPhoneNumber) {
        alert("Det indtastede telefonnummer er gyldigt!");
    } else {
        alert("Det indtastede telefonnummer er IKKE gyldigt.");
    }
} 
else {
    alert("Ingen input blev angivet.");
}
  