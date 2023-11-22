function f(x, iterations) {
    const fak = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800,
        479001600, 6227020800, 87178291200, 1307674368000, 20922789888000,
        355687428096000, 6402373705728000, 121645100408832000];

    var mul = 1, x2 = (resultat = potens = x) * x; iterations <<= 1;

    while (true) {
        if (mul >= iterations) break;

        potens *= x2 * -1; mul += 2;
        resultat += potens / fak[mul];
    }
    return resultat;
}

module.exports = { f };