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

  // Function to multiply a matrix by a scalar
  function multiplyByScalar(matrix, scalar) {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    const resultMatrix = createMatrix(rows, cols);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        resultMatrix[i][j] = matrix[i][j] * scalar;
      }
    }
  
    return resultMatrix;
  }
  
  // Function to multiply two matrices
  function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;
  
    if (colsA !== rowsB) {
      return null;
    }
  
    const resultMatrix = createMatrix(rowsA, colsB);
    for (let i = 0; i < rowsA; i++) {
      for (let j = 0; j < colsB; j++) {
        let sum = 0;
        for (let k = 0; k < colsA; k++) {
          sum += matrixA[i][k] * matrixB[k][j];
        }
        resultMatrix[i][j] = sum;
      }
    }
  
    return resultMatrix;
  }
  
  // Function to transpose a matrix
  function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    const resultMatrix = createMatrix(cols, rows);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        resultMatrix[j][i] = matrix[i][j];
      }
    }
  
    return resultMatrix;
  } 

  // Function to calculate the determinant of a matrix
  function calculateDeterminant(matrix) {
    const size = matrix.length;
  
    if (size !== matrix[0].length) {
      return null;
    }
  
    function recursiveDeterminant(matrix) {
      if (matrix.length === 2) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
      }
  
      let determinant = 0;
      for (let i = 0; i < size; i++) {
        const subMatrix = matrix.slice(1).map(row => row.filter((_, j) => j !== i));
        determinant += (i % 2 === 0 ? 1 : -1) * matrix[0][i] * recursiveDeterminant(subMatrix);
      }
  
      return determinant;
    }
  
    const determinant = recursiveDeterminant(matrix);
  
    if (determinant < 0) {
      console.log("Determinant of the matrix is negative");
    }
  
    return determinant;
  }
  
  // Function to calculate the inverse of a matrix
  function calculateInverseMatrix(matrix) {
    const size = matrix.length;
  
    if (size !== matrix[0].length) {
      return null;
    }
  
    function recursiveDeterminant(matrix) {
      if (matrix.length === 2) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
      }
  
      let determinant = 0;
      for (let i = 0; i < size; i++) {
        const subMatrix = matrix.slice(1).map(row => row.filter((_, j) => j !== i));
        determinant += (i % 2 === 0 ? 1 : -1) * matrix[0][i] * recursiveDeterminant(subMatrix);
      }
  
      return determinant;
    }
  
    const determinant = recursiveDeterminant(matrix);
  
    if (determinant === 0) {
      return null;
    }
  
    const cofactorMatrix = matrix.map((row, i) =>
      row.map((_, j) => {
        const subMatrix = matrix.filter((_, k) => k !== i).map(row => row.filter((_, l) => l !== j));
        return Math.pow(-1, i + j) * recursiveDeterminant(subMatrix);
      })
    );
  
    const adjugateMatrix = cofactorMatrix[0].map((_, j) =>
      cofactorMatrix.map(row => row[j])
    );
  
    const inverseMatrix = adjugateMatrix.map(row =>
      row.map(element => element / determinant)
    );
  
    return inverseMatrix;
  } 

    // Function to convert a matrix to a string
    function matrixToString(matrix) {
      return matrix.map(row => row.join(" ")).join("\n");
    }
    
    // Get the dimensions of matrix A from the user
    const rowsA = parseInt(prompt("Enter the number of rows for matrix A:"));
    const colsA = parseInt(prompt("Enter the number of columns for matrix A:"));
    
    const matrixA = createMatrix(rowsA, colsA);
    
    inputMatrix("A", matrixA);
    
    // Check if matrix B is needed
    const needMatrixB = confirm("Do you want to enter values for matrix B?");
    
    let matrixB = null;
    if (needMatrixB) {
      const rowsB = parseInt(prompt("Enter the number of rows for matrix B:"));
      const colsB = parseInt(prompt("Enter the number of columns for matrix B:"));
  
      matrixB = createMatrix(rowsB, colsB);
      inputMatrix("B", matrixB);
    }
    
    // Output matrix A
    console.log("Matrix A:");
    console.log(matrixToString(matrixA));
    
    // Output matrix B (if entered)
    if (matrixB) {
      console.log("Matrix B:");
      console.log(matrixToString(matrixB));
    }