import React, { useState } from "react";

const rotateMatrix = (matrix, n) => {
  let newMatrix = JSON.parse(JSON.stringify(matrix));

  // **Rotate outer border**
  let top = matrix[0].slice(0, n);
  let right = matrix.map(row => row[n - 1]);
  let bottom = matrix[n - 1].slice(0, n).reverse();
  let left = matrix.map(row => row[0]).reverse();

  // Assign rotated border
  for (let i = 0; i < n; i++) {
    newMatrix[0][i] = left[i];
    newMatrix[i][n - 1] = top[i];
    newMatrix[n - 1][i] = right[i];
    newMatrix[i][0] = bottom[i];
  }

  // **Rotate red block**
  let mid = Math.floor(n / 2);
  [newMatrix[mid - 1][mid], newMatrix[mid][mid]] =
    [newMatrix[mid][mid], newMatrix[mid - 1][mid]];
  [newMatrix[mid - 1][mid - 1], newMatrix[mid][mid - 1]] =
    [newMatrix[mid][mid - 1], newMatrix[mid - 1][mid - 1]];

  return newMatrix;
};

const MatrixTransform = () => {
  const [size, setSize] = useState(6);
  const [matrix, setMatrix] = useState(generateMatrix(6));

  function generateMatrix(n) {
    return Array.from({ length: n }, (_, row) =>
      Array.from({ length: n }, (_, col) => row * n + col + 1)
    );
  }

  return (
    <div className="p-4 text-center">
      <label>Select NxN Size: </label>
      <select value={size} onChange={(e) => {
        const newSize = parseInt(e.target.value);
        setSize(newSize);
        setMatrix(generateMatrix(newSize));
      }}>
        {[6, 8, 10, 12, 14, 16].map(n => (
          <option key={n} value={n}>{n}x{n}</option>
        ))}
      </select>

      <h3>Input Matrix</h3>
      <MatrixDisplay matrix={matrix} />

      <h3>Output Matrix</h3>
      <MatrixDisplay matrix={rotateMatrix(matrix, size)} />
    </div>
  );
};

const MatrixDisplay = ({ matrix }) => (
    <div
      className="matrix"
      style={{
        gridTemplateColumns: `repeat(${matrix.length}, 40px)`,
      }}
    >
      {matrix.map((row, rowIndex) =>
        row.map((num, colIndex) => {
          // Determine the class based on position
          let className = "white";
  
          if (
            rowIndex === 0 ||
            rowIndex === matrix.length - 1 ||
            colIndex === 0 ||
            colIndex === matrix.length - 1
          ) {
            className = "green"; // Outer border
          } else if (
            (rowIndex === Math.floor(matrix.length / 2) - 1 ||
              rowIndex === Math.floor(matrix.length / 2)) &&
            (colIndex === Math.floor(matrix.length / 2) - 1 ||
              colIndex === Math.floor(matrix.length / 2))
          ) {
            className = "red"; // Inner red block
          }
  
          return (
            <div key={`${rowIndex}-${colIndex}`} className={className}>
              {num}
            </div>
          );
        })
      )}
    </div>
  );
  
export default MatrixTransform;
