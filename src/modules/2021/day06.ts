import { SolutionFunction } from "../../interfaces/SolutionFunction";
import { getPuzzleInput } from "../../utils/getPuzzleInput";

type Lanternfish = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

const getCounts = (obj: { [key: number | string]: number }) => {
  return Object.values(obj).reduce((acc, cur) => acc + cur, 0);
};

export const lanternfish: SolutionFunction = async (mockData) => {
  const answer = { partOne: "unsolved", partTwo: "unsolved" };
  const input = mockData || (await getPuzzleInput("2021", "06"));
  const parsed: Lanternfish[] = input
    .split(",")
    .map((x) => parseInt(x, 10)) as Lanternfish[];

  const map = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    births: 0,
  };

  parsed.forEach((el) => map[el]++);

  for (let i = 0; i < 256; i++) {
    if (i === 80) {
      answer.partOne = getCounts(map).toString();
    }
    map.births = map[0];
    map[0] = map[1];
    map[1] = map[2];
    map[2] = map[3];
    map[3] = map[4];
    map[4] = map[5];
    map[5] = map[6];
    map[6] = map[7] + map.births;
    map[7] = map[8];
    map[8] = map.births;
    map.births = 0;
  }

  answer.partTwo = getCounts(map).toString();

  return answer;
};
