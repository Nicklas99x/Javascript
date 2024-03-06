// asm.js-funktion
function calculateSumOfSquares(N) {
    //"use asm";
    var sum = 0;
    var i = 0;
    for (i = 0; i <= N; i++) {
        sum += i * i;
    }
    return sum;
}

// Tidtagning af asm.js-funktionen
var N = 100000; // Antallet af beregninger
var startASM = performance.now();
calculateSumOfSquares(N);
var endASM = performance.now();
console.log("asm.js-tid for", N, "beregninger:", endASM - startASM, "millisekunder");
