// Funktion der tjekker om et ord indeholder en dobbeltkonsonant efterfulgt af en tredje konsonant
function checkForDoubleConsonant(word) {
    // Regulært udtryk for at teste om ordet kun indeholder bogstaver
    let onlyLettersRegex = /^[a-zA-ZæøåÆØÅ]+$/;
  
    // Tjekker om ordet kun indeholder bogstaver
    if (!onlyLettersRegex.test(word)) {
      return false; // Returnerer false hvis ordet indeholder andre karakterer end bogstaver
    }
  
    // Regulært udtryk for at teste om ordet indeholder en dobbeltkonsonant efterfulgt af en tredje konsonant
    let doubleConsonantRegex = /([^aeiouyæøå])\1([^aeiouyæøå])/i;
  
    // Tester om ordet matcher det regulære udtryk for dobbeltkonsonant efterfulgt af en tredje konsonant
    let match = doubleConsonantRegex.test(word);
  
    return match;
}
  
// Test af funktionen med et eksempel
let wordToCheck = 'bffb'; // Ændr dette til det ønskede ord
let containsDoubleConsonant = checkForDoubleConsonant(wordToCheck);

if (containsDoubleConsonant) {
    console.log(`Ordet "${wordToCheck}" indeholder en dobbeltkonsonant efterfulgt af en tredje konsonant.`);
} else {
    console.log(`Ordet "${wordToCheck}" indeholder ikke en dobbeltkonsonant efterfulgt af en tredje konsonant.`);
}