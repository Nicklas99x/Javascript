function generateAcronym(inputText) {
    var words = inputText.split(' ');
    var acronym = '';
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        // Fjern mellemrum og specialtegn, og konverter til store bogstaver
        var cleanedWord = word.replace(/[^a-zA-Z]/g, '').toUpperCase();
        // Tilføj det første bogstav af det rensede ord til akronymet
        if (cleanedWord.length > 0) {
            acronym += cleanedWord[0];
        }
    }
    return acronym;
}
document.addEventListener("DOMContentLoaded", function () {
    var inputText = prompt("Indtast en sekvens af ord:");
    if (inputText) {
        var acronym = generateAcronym(inputText);
        var outputDiv = document.getElementById("output");
        if (outputDiv) {
            outputDiv.innerText = "Akronymet for '".concat(inputText, "' er '").concat(acronym, "'");
        }
    }
});
