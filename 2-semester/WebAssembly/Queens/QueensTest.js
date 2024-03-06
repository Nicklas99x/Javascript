import { asmBenchmark, jsBenchmark } from './QueensAsmBenchmark.js';
function benchmark(func, limit) {
  var executionTime = performance.now();
  var result = func();
  var executionTime = (performance.now() - executionTime) / 1000;
  document.getElementById("h").innerHTML += `<br>Tid: ${executionTime} s. Result= ${result}`;
}
console.log("asm.js-version:");
var Q = 14;
var asmModule = asmBenchmark(window, { q: Q }, new ArrayBuffer(16 * 1024 * 1024));
var it = 10;
benchmark(asmModule.queens, it);
console.log("JavaScript-version:");
var jsModule = jsBenchmark(Q);
benchmark(jsModule.queens, it);