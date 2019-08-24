type Matrix = Array<number[]>;

function matrix(rows: number, cols: number): Matrix {
  return Array(rows)
    .fill([])
    .map(() => Array(cols).fill(0));
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
      `incorrect matrix shape: matrix1 has ${aCols} cols, but matrix2: ${aRows} rows`
    );
  }
  const result = matrix(aRows, bCols);
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

const input = [[0, 0], [0, 1], [1, 0], [1, 1]];
const output = [[0], [1], [1], [1]];

function l2norm(vector: number[]) {
  const norm = Math.sqrt(
    vector
      .map(value => Math.pow(value, 2))
      .reduce((acc, value) => acc + value, 0)
  );
  return vector.map(value => value / norm);
}

const weights = matrix(input[0].length, input.length - 1).map(row =>
  row.map(() => Math.random())
);

// for (let i = 0; i < 1000; i++) {
//   // forward
//   const hidden = dot(input, weights)
// }
console.log(weights);
const hidden = dot(input, weights);
console.log(hidden);
