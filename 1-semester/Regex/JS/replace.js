// Funktion der erstatter 'ss' med 'ß', hvis det efterfølges af en konsonant
function erstatSsMedSharpS(text) {
    // Definerer en regulær udtryk (regex) for at finde 'ss' efterfulgt af en konsonant
    const regex = /ss(?=[bcdfghjklmnpqrstvwxyz])/ig;
  
    // Erstatter fundne mønstre med 'ß'
    const newText = text.replace(regex, 'ß');
    
    return newText;
  }
  
  // Eksempel på brug af funktionen
  const inputText = "du hasst keine Probleme";
  const outputText = erstatSsMedSharpS(inputText);
  
  console.log("Input tekst:", inputText);
  console.log("Output tekst:", outputText);
  