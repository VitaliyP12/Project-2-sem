'use stict'
// Function to create an empty matrix of the given size
function createMatrix(rows, cols) {
    const matrix = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
    return matrix;
  }
  
  // Function to input values into a matrix
  function inputMatrix(matrixName, matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    alert(`Enter values for matrix ${matrixName}:`);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const value = prompt(`Enter value for element ${matrixName}[${i + 1}][${j + 1}]:`);
        matrix[i][j] = parseFloat(value);
      }
    }
  }
  
  // Function to perform matrix addition
  function addMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;
  
    if (rowsA !== rowsB || colsA !== colsB) {
      return null;
    }
  
    const resultMatrix = createMatrix(rowsA, colsA);
    for (let i = 0; i < rowsA; i++) {
      for (let j = 0; j < colsA; j++) {
        resultMatrix[i][j] = matrixA[i][j] + matrixB[i][j];
      }
    }
  
    return resultMatrix;
  }

  // Function to perform matrix subtraction
  function subtractMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;
  
    if (rowsA !== rowsB || colsA !== colsB) {
      return null;
    }
  
    const resultMatrix = createMatrix(rowsA, colsA);
    for (let i = 0; i < rowsA; i++) {
      for (let j = 0; j < colsA; j++) {
        resultMatrix[i][j] = matrixA[i][j] - matrixB[i][j];
      }
    }
  
    return resultMatrix;
  }