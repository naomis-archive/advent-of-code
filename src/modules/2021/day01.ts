import { SolutionFunction } from "../../interfaces/SolutionFunction";
import { getPuzzleInput } from "../../utils/getPuzzleInput";

export const sonarSweep: SolutionFunction = async (mockData) => {
  const answer = { partOne: "unsolved", partTwo: "unsolved" };
  const input = mockData || (await getPuzzleInput("2021", "01"));
  // This is a list of numbers so we need to convert them.
  const parsed = input.split("\n").map((el) => parseInt(el, 10));

  // Part 1

  let increases = 0;

  for (let i = 1; i < parsed.length; i++) {
    if (parsed[i] > parsed[i - 1]) {
      increases++;
    }
  }

  answer.partOne = increases.toString();

  // Part 2

  let sumsAreGreater = 0;

  for (let i = 0; i < parsed.length - 3; i++) {
    const leftSum = parsed[i] + parsed[i + 1] + parsed[i + 2];
    const rightSum = parsed[i + 1] + parsed[i + 2] + parsed[i + 3];
    if (rightSum > leftSum) {
      sumsAreGreater++;
    }
  }

  answer.partTwo = sumsAreGreater.toString();

  return answer;
};
