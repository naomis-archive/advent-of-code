import { SolutionFunction } from "../../interfaces/SolutionFunction";
import { getPuzzleInput } from "../../utils/getPuzzleInput";

export const dive: SolutionFunction = async (mockData) => {
  const answer = { partOne: "unsolved", partTwo: "unsolved" };
  const input = mockData || (await getPuzzleInput("2021", "02"));
  const parsed = input.split("\n");

  const partOne = parsed.reduce(
    (acc, element) => {
      const [keyword, value] = element.split(" ");
      switch (keyword) {
        case "forward":
          acc.horz += Number(value);
          break;
        case "down":
          acc.vert += Number(value);
          break;
        case "up":
          acc.vert -= Number(value);
          break;
        default:
          throw new Error(`Unknown keyword: ${keyword}`);
      }
      return acc;
    },
    { horz: 0, vert: 0 }
  );

  answer.partOne = `${partOne.horz * partOne.vert}`;

  const partTwo = parsed.reduce(
    (acc, element) => {
      const [keyword, value] = element.split(" ");
      switch (keyword) {
        case "forward":
          acc.horz += Number(value);
          acc.vert += acc.aim * Number(value);
          break;
        case "down":
          acc.aim += Number(value);
          break;
        case "up":
          acc.aim -= Number(value);
          break;
        default:
          throw new Error(`Unknown keyword: ${keyword}`);
      }
      return acc;
    },
    { horz: 0, vert: 0, aim: 0 }
  );

  answer.partTwo = `${partTwo.horz * partTwo.vert}`;

  return answer;
};
