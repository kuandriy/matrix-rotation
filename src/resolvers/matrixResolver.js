const validateMatrix = (matrix) => {
  if (!Array.isArray(matrix) || matrix.length === 0) {
    throw new Error("Matrix must be a non-empty array.");
  }

  const size = matrix.length;
  for (const row of matrix) {
    if (!Array.isArray(row) || row.length !== size) {
      throw new Error("Matrix must be square (same number of rows and columns).");
    }
    for (const value of row) {
      if (!Number.isInteger(value)) {
        throw new Error("All values in the matrix must be integers.");
      }
    }
  }
};

const resolvers = {
  Query: {
    echo: async (parent, { input }) => {
      const matrix = input.matrix;
      validateMatrix(matrix);
      return matrix.map((row) => row.join(",")).join("\n");
    },
    invert: async (parent, { input }) => {
      const matrix = input.matrix;
      validateMatrix(matrix);
      const inverted = matrix[0].map((_, colIndex) =>
        matrix.map((row) => row[colIndex])
      );
      return inverted.map((row) => row.join(",")).join("\n");
    },
    flatten: async (parent, { input }) => {
      const matrix = input.matrix;
      validateMatrix(matrix);
      return matrix.flat().join(",");
    },
    sum: async (parent, { input }) => {
      const matrix = input.matrix;
      validateMatrix(matrix);
      return matrix.flat().reduce((acc, val) => acc + val, 0);
    },
    multiply: async (parent, { input }) => {
      const matrix = input.matrix;
      validateMatrix(matrix);
      return matrix.flat().reduce((acc, val) => acc * val, 1);
    },
  },
};

module.exports = resolvers;