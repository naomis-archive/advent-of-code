import { SolutionFunction } from "../../interfaces/SolutionFunction";
import { getPuzzleInput } from "../../utils/getPuzzleInput";

const generateBoard = (input: number[][][]): number[][] => {
  const [x, y] = input.reduce(
    (acc, cur) => {
      return [
        Math.max(acc[0], cur[0][0], cur[1][0]),
        Math.max(acc[1], cur[0][1], cur[1][1]),
      ];
    },
    [0, 0]
  );

  return Array.from(new Array(y + 1), () => new Array(x + 1).fill(0));
};

const markLine = (
  coords: [[number, number], [number, number]],
  board: number[][]
) => {
  const [[xOne, yOne], [xTwo, yTwo]] = coords;
  if (xOne === xTwo && yOne === yTwo) {
    board[yOne][xOne] = board[yOne][xOne] + 1;
    return;
  }
  if (xOne === xTwo) {
    const yMin = Math.min(yOne, yTwo);
    const yMax = Math.max(yOne, yTwo);
    for (let y = yMin; y <= yMax; y++) {
      board[y][xOne] = board[y][xOne] + 1;
    }
  }
  if (yOne === yTwo) {
    const xMin = Math.min(xOne, xTwo);
    const xMax = Math.max(xOne, xTwo);
    for (let x = xMin; x <= xMax; x++) {
      board[yOne][x] = board[yOne][x] + 1;
    }
  }
};

const markLineWithDiagonals = (
  coords: [[number, number], [number, number]],
  board: number[][]
) => {
  const [[xOne, yOne], [xTwo, yTwo]] = coords;
  if (xOne === xTwo && yOne === yTwo) {
    board[yOne][xOne] = board[yOne][xOne] + 1;
    return;
  }
  // consider slopes of 45 degrees
  if (Math.abs(yOne - yTwo) === Math.abs(xOne - xTwo)) {
    const [xStart, yStart] = xOne < xTwo ? [xOne, yOne] : [xTwo, yTwo];
    // positive slopes have same sign
    if (yOne - yTwo === xOne - xTwo) {
      for (let inc = 0; inc <= Math.abs(xOne - xTwo); inc++) {
        board[yStart + inc][xStart + inc] =
          board[yStart + inc][xStart + inc] + 1;
      }
    } else {
      for (let inc = 0; inc <= Math.abs(xOne - xTwo); inc++) {
        board[yStart - inc][xStart + inc] =
          board[yStart - inc][xStart + inc] + 1;
      }
    }
    return;
  }
  if (xOne === xTwo) {
    const yMin = Math.min(yOne, yTwo);
    const yMax = Math.max(yOne, yTwo);
    for (let y = yMin; y <= yMax; y++) {
      board[y][xOne] = board[y][xOne] + 1;
    }
    return;
  }
  if (yOne === yTwo) {
    const xMin = Math.min(xOne, xTwo);
    const xMax = Math.max(xOne, xTwo);
    for (let x = xMin; x <= xMax; x++) {
      board[yOne][x] = board[yOne][x] + 1;
    }
    return;
  }
};

const countTwos = (board: number[][]) => {
  return board.flat().filter((el) => el >= 2).length;
};

export const hydrothermalVenture: SolutionFunction = async (mockData) => {
  const answer = { partOne: "unsolved", partTwo: "unsolved" };
  const input = mockData || (await getPuzzleInput("2021", "05"));
  const parsed = input.split("\n").map((line) => {
    const [first, second] = line.split(" -> ");
    const [xOne, yOne] = first.split(",");
    const [xTwo, yTwo] = second.split(",");
    return [
      [parseInt(xOne), parseInt(yOne)],
      [parseInt(xTwo), parseInt(yTwo)],
    ];
  }) as [[number, number], [number, number]][];

  const board = generateBoard(parsed);

  parsed.forEach((line) => {
    markLine(line, board);
  });

  answer.partOne = String(countTwos(board));

  const cleanBoard = generateBoard(parsed);

  parsed.forEach((line) => {
    markLineWithDiagonals(line, cleanBoard);
  });

  answer.partTwo = String(countTwos(cleanBoard));

  return answer;
};
