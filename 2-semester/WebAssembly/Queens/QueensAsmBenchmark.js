export function asmBenchmark(stdlib, foreign, heap) {
  "use asm";
  var columnOccupied = new stdlib.Int8Array(heap);
  var venstreDiagOccupied = new stdlib.Int8Array(heap);
  var hojreDiagOccupied = new stdlib.Int8Array(heap);
  var queens = new stdlib.Int8Array(heap);
  var q = foreign.q | 0;
  function FasterPositionQueens() {
    var noOfQueens = 0;
    var row = 0;
    var col = 0;
    var minus1 = 0;
    var fastLegalCounter = 0;
    var noOfSolutions = 0;
    var venstreOffset = 128;
    var hojreOffset = 256;
    var queensOffset = 384;
    noOfQueens = q | 0;
    minus1 = (noOfQueens - 1) | 0;
    do {
      do {
        fastLegalCounter = (fastLegalCounter + 1) | 0;
        if ((columnOccupied[col | 0] | 0) == 1) { col = (col + 1) | 0; }
        else if (((venstreDiagOccupied[(venstreOffset + row + col) | 0]) | 0) == 1) { col = (col + 1) | 0; }
        else if (((hojreDiagOccupied[(hojreOffset + row + minus1 - col) | 0]) | 0) == 1) { col = (col + 1) | 0; }
        else {
          if ((row | 0) >= (minus1 | 0)) {
            noOfSolutions = (noOfSolutions + 1) | 0;
            col = noOfQueens | 0;
          } else {
            columnOccupied[col | 0] = 1;
            venstreDiagOccupied[(venstreOffset + row + col) | 0] = 1;
            hojreDiagOccupied[(hojreOffset + row + minus1 - col) | 0] = 1;
            queens[(queensOffset + row) | 0] = col | 0;
            row = (row + 1) | 0;
            col = 0;
          }
        }
      } while ((col | 0) < (noOfQueens | 0));
      row = (row - 1) | 0;
      do {
        col = queens[(queensOffset + row) | 0] | 0;
        columnOccupied[col | 0] = 0;
        venstreDiagOccupied[(venstreOffset + row + col) | 0] = 0;
        hojreDiagOccupied[(hojreOffset + row + minus1 - col) | 0] = 0;
        col = (col + 1) | 0;
        if ((col | 0) == (noOfQueens | 0)) row = (row - 1) | 0; else break;
      } while ((row | 0) >= 0);
    } while ((row | 0) >= 0);
    return noOfSolutions | 0;
  }
  return { queens: FasterPositionQueens };
}
export function jsBenchmark(q) {
  function JSqueens() {
    var noOfQueens = q, row = 0, minus1 = noOfQueens - 1, col = 0, fastLegalCounter = 0;
    var queens = new Int32Array(32), noOfSolutions = 0;
    var columnOccupied = new Int32Array(32), venstreDiagOccupied = new Int32Array(32), hojreDiagOccupied = new Int32Array(32);
    do {
      do {
        fastLegalCounter++;
        if (columnOccupied[col] === 1 || venstreDiagOccupied[row + col] === 1 || hojreDiagOccupied[row + minus1 - col] === 1) {
          col++;
        } else {
          if (row >= minus1) {
            noOfSolutions++;
            col = noOfQueens;
          } else {
            columnOccupied[col] = 1;
            venstreDiagOccupied[row + col] = 1;
            hojreDiagOccupied[row + minus1 - col] = 1;
            queens[row++] = col;
            col = 0;
          }
        }
      } while (col < noOfQueens);
      row--;
      do {
        col = queens[row];
        columnOccupied[col] = 0;
        venstreDiagOccupied[row + col] = 0;
        hojreDiagOccupied[row + minus1 - col] = 0;
        if ((++col) == noOfQueens) row--; else break;
      } while (row >= 0);
    } while (row >= 0);
    return noOfSolutions;
  }
  return { queens: JSqueens };
}
