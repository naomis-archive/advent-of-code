import { SolutionFunction } from "../../interfaces/SolutionFunction";
import { getPuzzleInput } from "../../utils/getPuzzleInput";

export const treacheryOfWhales: SolutionFunction = async (mockData) => {
  const answer = { partOne: "unsolved", partTwo: "unsolved" };
  const input = mockData || (await getPuzzleInput("2021", "07"));
  const parsed = input.split(",").map((el) => parseInt(el));

  const median = parsed.sort()[Math.floor(parsed.length / 2)];

  answer.partOne = String(
    parsed.reduce((acc, el) => acc + Math.abs(el - median), 0)
  );

  const max = Math.max(...parsed);
  const min = Math.min(...parsed);

  let best = Infinity;

  for (let i = min; i <= max; i++) {
    const fuel = parsed.reduce((acc, el) => {
      const diff = Math.abs(el - i);
      return acc + (diff * (diff + 1)) / 2;
    }, 0);
    if (fuel < best) {
      best = fuel;
    }
  }
  answer.partTwo = String(best);

  return answer;
};
