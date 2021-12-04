import { SolutionFunction } from "../../interfaces/SolutionFunction";
import { getPuzzleInput } from "../../utils/getPuzzleInput";

type Row = [string, string, string, string, string];
type Board = [Row, Row, Row, Row, Row];

const markNumber = (board: Board, number: string): void => {
  board.forEach((row) => {
    const target = row.indexOf(number);
    if (target > -1) {
      row[target] = "X";
    }
  });
};

const checkWinner = (board: Board): boolean => {
  for (const row of board) {
    if (
      row[0] === "X" &&
      row[1] === "X" &&
      row[2] === "X" &&
      row[3] === "X" &&
      row[4] === "X"
    ) {
      return true;
    }
  }
  for (let i = 0; i < 5; i++) {
    if (
      board[0][i] === "X" &&
      board[1][i] === "X" &&
      board[2][i] === "X" &&
      board[3][i] === "X" &&
      board[4][i] === "X"
    ) {
      return true;
    }
  }
  return false;
};

const getBoardSum = (board: Board): number => {
  const flattened = board.flat().filter((el) => el !== "X");
  return flattened.reduce((sum, el) => sum + parseInt(el), 0);
};

export const giantSquid: SolutionFunction = async (mockData) => {
  const answer = { partOne: "unsolved", partTwo: "unsolved" };
  const input = mockData || (await getPuzzleInput("2021", "04"));
  const [calledNumbers, , ...rawBoards] = input.split("\n");

  const boards: Board[] = [];
  let board = [];
  let count = 0;
  let winningBoard: Board | null = null;
  let winningNumber = "";
  let losingBoard: Board | null = null;
  let losingNumber = "";

  // parse the board data into sub-arrays
  for (let i = 0; i < rawBoards.length; i++) {
    if (!rawBoards[i]) {
      continue;
    }
    if (count >= 5) {
      boards.push(board as Board);
      board = [];
      count = 0;
    }
    board.push(rawBoards[i].split(/\s+/));
    count++;
  }
  boards.push(board as Board);

  loop1: for (const number of calledNumbers.split(",")) {
    for (let index = 0; index < boards.length; index++) {
      markNumber(boards[index], number);
      if (checkWinner(boards[index])) {
        if (!winningBoard) {
          winningBoard = boards[index];
          winningNumber = number;
        }
        if (boards.length === 1) {
          losingBoard = boards[index];
          losingNumber = number;
          break loop1;
        }
        boards.splice(Number(index), 1);
        index--;
      }
    }
  }

  if (!winningBoard || !losingBoard) {
    throw new Error("No winning board found");
  }

  answer.partOne = String(parseInt(winningNumber) * getBoardSum(winningBoard));
  answer.partTwo = String(parseInt(losingNumber) * getBoardSum(losingBoard));

  return answer;
};
