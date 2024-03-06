// JavaScript-funktion
function calculateSumOfSquares(N) {
    var sum = 0;
    var i = 0;
    for (i = 0; i <= N; i++) {
        sum += i * i;
    }
    return sum;
}

var N = 100000; // Antallet af beregninger
// Tidtagning af JavaScript-funktionen
var startJS = performance.now();
calculateSumOfSquares(N);
var endJS = performance.now();
console.log("JavaScript-tid for:", N, "beregninger ", endJS - startJS, "millisekunder");
