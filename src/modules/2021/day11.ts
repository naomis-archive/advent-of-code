import { SolutionFunction } from "../../interfaces/SolutionFunction";
import { getPuzzleInput } from "../../utils/getPuzzleInput";

const allOctopiFlashed = (octopi: number[][]): boolean => {
  return octopi.every((row) => row.every((octopus) => octopus === 0));
};

const generateIndices = (row: number, octopus: number): [number, number][] => {
  return [
    [row - 1, octopus - 1],
    [row - 1, octopus],
    [row - 1, octopus + 1],
    [row, octopus - 1],
    [row, octopus + 1],
    [row + 1, octopus - 1],
    [row + 1, octopus],
    [row + 1, octopus + 1],
  ];
};

const flashOctopus = (
  octopi: number[][],
  row: number,
  octopus: number
): number => {
  let flashes = 1;
  octopi[row][octopus] = 0;
  const indices = generateIndices(row, octopus);
  indices.forEach(([r, o]) => {
    if (octopi[r]?.[o] && octopi[r][o] > 0) {
      octopi[r][o] += 1;
      if (octopi[r][o] > 9) {
        flashes += flashOctopus(octopi, r, o);
      }
    }
  });
  return flashes;
};

const incrementOctopi = (octopi: number[][]): number => {
  let stepFlashes = 0;
  octopi.forEach((row, rowIndex) => {
    row.forEach((_, octopusIndex) => {
      octopi[rowIndex][octopusIndex] += 1;
    });
  });
  octopi.forEach((row, rowIndex) => {
    row.forEach((_, octopusIndex) => {
      if (octopi[rowIndex][octopusIndex] > 9) {
        stepFlashes += flashOctopus(octopi, rowIndex, octopusIndex);
      }
    });
  });

  return stepFlashes;
};

export const dumboOctopus: SolutionFunction = async (mockData) => {
  const answer = { partOne: "unsolved", partTwo: "unsolved" };
  const input = mockData || (await getPuzzleInput("2021", "11"));
  const parsed = input
    .split("\n")
    .map((el) => el.split("").map((el) => parseInt(el)));

  let totalFlashes = 0;
  let finalTotalFlashes = 0;
  let bigFlashStep = 0;
  for (let i = 1; i <= 1000; i++) {
    totalFlashes += incrementOctopi(parsed);
    if (i === 100) {
      finalTotalFlashes = totalFlashes;
    }
    if (allOctopiFlashed(parsed)) {
      bigFlashStep = i;
      break;
    }
  }
  answer.partOne = String(finalTotalFlashes);
  answer.partTwo = String(bigFlashStep);
  return answer;
};
