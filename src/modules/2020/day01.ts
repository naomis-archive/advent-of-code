import { SolutionFunction } from "../../interfaces/SolutionFunction";
import { getPuzzleInput } from "../../utils/getPuzzleInput";

export const reportRepair: SolutionFunction = async (mockData) => {
  const answer = { partOne: "unsolved", partTwo: "unsolved" };
  const input = mockData || (await getPuzzleInput("2020", "01"));
  const parsed = input.split("\n").map((el) => parseInt(el));

  loop1: for (let i = 0; i < parsed.length; i++) {
    for (let j = i + 1; j < parsed.length; j++) {
      if (parsed[i] + parsed[j] === 2020) {
        answer.partOne = String(parsed[i] * parsed[j]);
        break loop1;
      }
    }
  }

  loop1: for (let i = 0; i < parsed.length; i++) {
    for (let j = i + 1; j < parsed.length; j++) {
      for (let k = j + 1; k < parsed.length; k++) {
        if (parsed[i] + parsed[j] + parsed[k] === 2020) {
          answer.partTwo = String(parsed[i] * parsed[j] * parsed[k]);
          break loop1;
        }
      }
    }
  }

  return answer;
};
