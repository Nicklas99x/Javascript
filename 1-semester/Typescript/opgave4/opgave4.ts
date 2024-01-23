function generateAcronym(inputText: string): string {
    const words: string[] = inputText.split(' ');
    let acronym: string = '';

    for(const word of words) {
        // Fjern mellemrum og specialtegn, og konverter til store bogstaver
        const cleanedWord: string = word.replace(/[^a-zA-Z]/g, '').toUpperCase();
    }
    return acronym;
}

document.addEventListener("DOMContentLoaded", () => {
    const inputText: string | null = prompt("Indtast en sekvens af ord:");
    if (inputText) {
        const acronym: string = generateAcronym(inputText);
        const outputDiv: HTMLElement | null = document.getElementById("output");

        if (outputDiv) {
            outputDiv.innerText = `Akronymet for '${inputText}' er '${acronym}'`;
        }
    }
});
