const { testContext } = require("project-test/testContext");
const { setup, teardown } = testContext();
const resolvers = require("project/resolvers/matrixResolver");

describe("MatrixService", () => {
  beforeAll(async () => {
    await setup();
  });

  afterAll(async () => {
    await teardown();
  });

  test("echo", async () => {
    const input = {
      matrix: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
    };
    const result = await resolvers.Query.echo(null, { input });
    expect(result).toBe("1,2,3\n4,5,6\n7,8,9");
  });

  test("invert", async () => {
    const input = {
      matrix: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
    };
    const result = await resolvers.Query.invert(null, { input });
    expect(result).toBe("1,4,7\n2,5,8\n3,6,9");
  });

  test("flatten", async () => {
    const input = {
      matrix: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
    };
    const result = await resolvers.Query.flatten(null, { input });
    expect(result).toBe("1,2,3,4,5,6,7,8,9");
  });

  test("sum", async () => {
    const input = {
      matrix: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
    };
    const result = await resolvers.Query.sum(null, { input });
    expect(result).toBe(45);
  });

  test("multiply", async () => {
    const input = {
      matrix: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
    };
    const result = await resolvers.Query.multiply(null, { input });
    expect(result).toBe(362880);
  });
});
describe("MatrixService Error Handling", () => {
  test("should throw error for non-array input", async () => {
    const input = { matrix: "not an array" };
    await expect(resolvers.Query.echo(null, { input })).rejects.toThrow("Matrix must be a non-empty array.");
  });

  test("should throw error for empty array", async () => {
    const input = { matrix: [] };
    await expect(resolvers.Query.echo(null, { input })).rejects.toThrow("Matrix must be a non-empty array.");
  });

  test("should throw error for non-square matrix", async () => {
    const input = { matrix: [[1, 2], [3, 4, 5]] };
    await expect(resolvers.Query.echo(null, { input })).rejects.toThrow("Matrix must be square (same number of rows and columns).");
  });

  test("should throw error for non-integer values", async () => {
    const input = { matrix: [[1, 2, 3], [4, "five", 6], [7, 8, 9]] };
    await expect(resolvers.Query.echo(null, { input })).rejects.toThrow("All values in the matrix must be integers.");
  });
});
