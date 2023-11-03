// Funktion til at tælle bogstaver
function* countLetters(text) {
    // Konverter teksten til små bogstaver og fjern specialtegn og tal
    const cleanText = text.toLowerCase().match(/\p{L}/gu, '');
  
    // Opret en tæller for hvert bogstav
    const letterCount = new Map();
  
    for (const letter of cleanText) {
      if (letterCount.has(letter)) {
        letterCount.set(letter, letterCount.get(letter) + 1);
      } else {
        letterCount.set(letter, 1);
      }
    }
  
    // Generer bogstaver og antal
    for (const [letter, count] of letterCount) {
      yield { letter, count };
    }
  }
  
  // Håndter indtastning fra tekstfeltet
  document.getElementById('inputText').addEventListener('input', () => {
    const text = document.getElementById('inputText').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Nulstil resultatfeltet
  
    // Kald generatorfunktionen og vis resultaterne
    for (const { letter, count } of countLetters(text)) {
      const letterElement = document.createElement('div');
      letterElement.textContent = `${letter}: ${count}`;
      resultDiv.appendChild(letterElement);
    }
  });
  