import { SolutionFunction } from "../../interfaces/SolutionFunction";
import { getPuzzleInput } from "../../utils/getPuzzleInput";

const getCommonality = (list: string[], position: number): string => {
  const counts = {
    zero: 0,
    one: 0,
  };
  list.forEach((item) => {
    if (item[position] === "0") {
      counts.zero++;
    } else {
      counts.one++;
    }
  });

  return counts.zero > counts.one ? "0" : "1";
};

export const binaryDiagonstic: SolutionFunction = async (mockData) => {
  const answer = { partOne: "unsolved", partTwo: "unsolved" };
  const input = mockData || (await getPuzzleInput("2021", "03"));
  const parsed = input.split("\n");

  const counts: { [key: number]: [number, number] } = {};

  parsed.forEach((line) => {
    const digits = line.split("");
    digits.forEach((digit, index) => {
      if (!counts[index]) {
        counts[index] = [0, 0];
      }
      parseInt(digit) ? counts[index][1]++ : counts[index][0]++;
    });
  });

  let gamma = "";
  let epsilon = "";

  for (const [zero, one] of Object.values(counts)) {
    if (zero > one) {
      gamma += "0";
      epsilon += "1";
    } else {
      gamma += "1";
      epsilon += "0";
    }
  }

  answer.partOne = String(parseInt(gamma, 2) * parseInt(epsilon, 2));

  const length = gamma.length;

  let oxygen = [...parsed];
  let co2 = [...parsed];

  for (let i = 0; i < length; i++) {
    if (oxygen.length > 1) {
      const target = getCommonality(oxygen, i);
      oxygen = oxygen.filter((item) => item[i] === target);
    }
    if (co2.length > 1) {
      const target = getCommonality(co2, i);
      co2 = co2.filter((item) => item[i] !== target);
    }
  }

  answer.partTwo = String(parseInt(oxygen[0], 2) * parseInt(co2[0], 2));

  return answer;
};
