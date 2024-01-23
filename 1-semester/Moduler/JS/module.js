function beregnAfstand(punkt1, punkt2) {
    const x1 = punkt1.x;
    const y1 = punkt1.y;
    const x2 = punkt2.x;
    const y2 = punkt2.y;

    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    const afstand = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return afstand;
}

module.exports = beregnAfstand;