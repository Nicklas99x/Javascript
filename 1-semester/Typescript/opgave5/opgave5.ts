// Funktion til at tjekke om dronningerne kan angribe hinanden
function canQueensAttack(row1: number, col1: number, row2: number, col2: number): boolean {
    // Tjek om dronningerne er på samme række eller kolonne
    if(row1 === row2 || col1 === col2) {
        return true;
    }
  
    // Tjek om dronningerne er på samme diagonal
    if(Math.abs(row1 - row2) === Math.abs(col1 - col2)) {
        return true;
    }
  
    // Hvis ingen af betingelserne er opfyldt, kan dronningerne ikke angribe hinanden
    return false;
}
  
// Læs koordinater for de to dronninger fra brugeren
const row1Input: string | null = prompt("Indtast række for dronning 1 (1-8): ");
const col1Input: string | null = prompt("Indtast kolonne for dronning 1 (1-8): ");
const row2Input: string | null = prompt("Indtast række for dronning 2 (1-8): ");
const col2Input: string | null = prompt("Indtast kolonne for dronning 2 (1-8): ");

if(row1Input !== null && col1Input !== null && row2Input !== null && col2Input !== null) {
    // Konverter brugerinput til tal
    const row1: number = parseInt(row1Input, 10);
    const col1: number = parseInt(col1Input, 10);
    const row2: number = parseInt(row2Input, 10);
    const col2: number = parseInt(col2Input, 10);

    if(isNaN(row1) || isNaN(col1) || isNaN(row2) || isNaN(col2) ||
        row1 < 1 || row1 > 8 || col1 < 1 || col1 > 8 ||
        row2 < 1 || row2 > 8 || col2 < 1 || col2 > 8) {
        console.log("Ugyldigt input. Indtast venligst gyldige koordinater mellem 1 og 8.");
    } 
    else 
    {
        // Tjek om dronningerne kan angribe hinanden
        const result = canQueensAttack(row1, col1, row2, col2);

        // Vis resultatet på HTML-siden
        const resultElement = document.getElementById("result");
        if (resultElement) 
        {
            resultElement.textContent = result ? "Dronningerne kan angribe hinanden." : "Dronningerne kan ikke angribe hinanden.";
        }
    }
}
