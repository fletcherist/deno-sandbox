type Matrix = Array<number[]>;

// function range(n: number): number[] {
// }

function createZeroMatrix(m: number, n: number): Matrix {
  return Array(m)
    .fill([])
    .map(() => Array(n).fill(0));
}

function getMatrixShape(a: Matrix): [number, number] {
  return [a.length, a.length > 0 ? a[0].length : 0];
}
function getMatrixRow(a: Matrix, row: number): number[] {
  return a[row];
}
function getMatrixCol(a: Matrix, col: number): number[] {
  return Array(a.length)
    .fill(0)
    .map((_, index) => a[index][col]);
}

export function dot(a: Matrix, b: Matrix): Matrix {
  const [aRows, aCols] = getMatrixShape(a);
  const [bRows, bCols] = getMatrixShape(b);
  if (aCols !== bRows) {
    throw new Error(
      `incorrect matrix shape: matrix 1 has ${aCols} cols, but matrix 2: ${aRows} rows`
    );
  }
  const result = createZeroMatrix(aRows, bCols);
  for (let i = 0; i < aRows; i++) {
    for (let j = 0; j < bCols; j++) {
      const aRow = getMatrixRow(a, i);
      const bCol = getMatrixCol(b, j);
      result[i][j] = aRow
        .map((val, index) => val * bCol[index])
        .reduce((sum, val) => sum + val, 0);
    }
  }
  return result;
}

const matrixA = [[1, 2], [3, 4], [1, 1]];
const matrixB = [[1, 2], [3, 4]];
