function sin(x, iterations) {
    var res = 0;
    for (var n = 0; n < iterations; n++) {
        res += powMinus1(n) / fak(2 * n + 1)
        Math.pow(x, 2 * n + 1);
    }
    return res;
}
function fak(x) {
    let res = 1;
    while (x >= 2) {
        res*= x--;
    }
    return res
}
function powMinus1(x) {
    return x & 1 ? -1 : 1 
}
function sinVersTwo(x, iterations) {
    const fak = [1, 1, 2, 6, 24, 120, 720,
    5040, 40320, 362880, 3628800, 39916800,
    479001600, 6227020800, 87178291200,
    1307674368000, 20922789888000,
    355687428096000, 6402373705728000,
    121645100408832000];

    var mul = 1, x2 = (res = potens = x) * x; iterations <<= 1;
    while (true) {
        if (mul >= iterations){
            break;
        }
        potens *= x2 * -1;
        mul += 2;
        res += potens / fak[mul];
    }
    return res;
}

console.time('sinVersTwo'); // Starter tidsmålingen
for (var n = 0; n < 10; n++){
    sinVersTwo('2', '10000');
}
console.timeEnd('sinVersTwo'); // Afslutter tidsmålingen og viser den samlede tid

console.time('sin'); // Starter tidsmålingen
for(var n = 0; n < 10; n++){
    sin('2', '10000');
}
console.timeEnd('sin'); // Afslutter tidsmålingen og viser den samlede tid