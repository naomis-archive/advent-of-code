import { SolutionFunction } from "../../interfaces/SolutionFunction";
import { getPuzzleInput } from "../../utils/getPuzzleInput";

const isLowPoint = (row: number, col: number, grid: number[][]) => {
  if (row > 0 && grid[row - 1][col] <= grid[row][col]) {
    return false;
  }
  if (row < grid.length - 1 && grid[row + 1][col] <= grid[row][col]) {
    return false;
  }
  if (col > 0 && grid[row][col - 1] <= grid[row][col]) {
    return false;
  }
  if (col < grid[row].length - 1 && grid[row][col + 1] <= grid[row][col]) {
    return false;
  }
  return true;
};

const getBasinSize = (
  row: number,
  col: number,
  grid: number[][],
  direction: string
): number => {
  let size = 1;
  if (row > 0 && grid[row - 1][col] !== 9 && direction !== "down") {
    grid[row - 1][col] = 9;
    size += getBasinSize(row - 1, col, grid, "up");
  }
  if (row < grid.length - 1 && grid[row + 1][col] !== 9 && direction !== "up") {
    grid[row + 1][col] = 9;
    size += getBasinSize(row + 1, col, grid, "down");
  }
  if (col > 0 && grid[row][col - 1] !== 9 && direction !== "right") {
    grid[row][col - 1] = 9;
    size += getBasinSize(row, col - 1, grid, "left");
  }
  if (
    col < grid[row].length - 1 &&
    grid[row][col + 1] !== 9 &&
    direction !== "left"
  ) {
    grid[row][col + 1] = 9;
    size += getBasinSize(row, col + 1, grid, "right");
  }
  return size;
};

export const smokeBasin: SolutionFunction = async (mockData) => {
  const answer = { partOne: "unsolved", partTwo: "unsolved" };
  const input = mockData || (await getPuzzleInput("2021", "09"));
  const lines = input.split("\n");
  const board = lines.map((el) => el.split("").map((el) => parseInt(el)));

  let lowPointValues = 0;
  const coordinates: [number, number][] = [];
  const basinSizes = [0, 0, 0];

  board.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (isLowPoint(rowIndex, colIndex, board)) {
        lowPointValues += board[rowIndex][colIndex] + 1;
        coordinates.push([rowIndex, colIndex]);
      }
    });
  });

  coordinates.forEach(([row, col]) => {
    basinSizes.push(getBasinSize(row, col, board, ""));
    basinSizes.sort((a, b) => a - b);
    basinSizes.shift();
  });

  answer.partOne = lowPointValues.toString();
  answer.partTwo = String(basinSizes.reduce((acc, el) => acc * (el - 1), 1));
  return answer;
};
