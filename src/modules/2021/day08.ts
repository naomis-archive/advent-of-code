import { SolutionFunction } from "../../interfaces/SolutionFunction";
import { getPuzzleInput } from "../../utils/getPuzzleInput";

const isPermutation = (key: string, cipher: string): boolean => {
  return sortWires(key) === sortWires(cipher);
};

const sortWires = (wires: string): string => {
  return wires.split("").sort().join("");
};

export const sevenSegmentSearch: SolutionFunction = async (mockData) => {
  const answer = { partOne: "unsolved", partTwo: "unsolved" };
  const input = mockData || (await getPuzzleInput("2021", "08"));
  const parsed = input.split("\n");
  const keys: string[] = [];
  const ciphers: string[] = [];

  parsed.forEach((line) => {
    const [key, cipher] = line.split(" | ");
    keys.push(key);
    ciphers.push(cipher);
  });

  answer.partOne = String(
    ciphers
      .map((el) => el.split(" "))
      .flat()
      .filter((el) => [2, 3, 4, 7].includes(el.length)).length
  );

  let sum = 0;

  keys.forEach((key, i) => {
    const keyEntries = key.split(" ");
    const cipherEntries = ciphers[i].split(" ");

    const map: Record<number, string | undefined> = {
      0: undefined,
      1: undefined,
      2: undefined,
      3: undefined,
      4: undefined,
      5: undefined,
      6: undefined,
      7: undefined,
      8: undefined,
      9: undefined,
    };

    map[1] = sortWires(keyEntries.find((el) => el.length === 2) as string);
    map[4] = sortWires(keyEntries.find((el) => el.length === 4) as string);
    map[7] = sortWires(keyEntries.find((el) => el.length === 3) as string);
    map[8] = sortWires(keyEntries.find((el) => el.length === 7) as string);

    const topLeftMiddle = map[4]
      ?.split("")
      .filter((el) => !map[1]?.includes(el));

    map[3] = sortWires(
      keyEntries.find(
        (el) =>
          el.length === 5 &&
          map[1]?.split("").every((letter) => el.includes(letter))
      ) as string
    );

    const middle = topLeftMiddle.filter((el) => map[3]?.includes(el))[0];
    const topLeft = topLeftMiddle.filter((el) => !map[3]?.includes(el))[0];

    map[0] = sortWires(
      keyEntries.find((el) => el.length === 6 && !el.includes(middle)) as string
    );
    map[5] = sortWires(
      keyEntries.find((el) => el.length === 5 && el.includes(topLeft)) as string
    );
    map[2] = sortWires(
      keyEntries.find(
        (el) =>
          el.length === 5 &&
          !isPermutation(el, map[5] as string) &&
          !isPermutation(el, map[3] as string)
      ) as string
    );
    map[9] = sortWires(
      keyEntries.find(
        (el) =>
          el.length === 6 &&
          map[3]?.split("").every((letter) => el.includes(letter))
      ) as string
    );
    map[6] = sortWires(
      keyEntries.find(
        (el) =>
          el.length === 6 &&
          !isPermutation(el, map[9] as string) &&
          !isPermutation(el, map[0] as string)
      ) as string
    );

    const numbers = cipherEntries.map((el) => {
      return Object.entries(map).find((entry) =>
        isPermutation(entry[1] as string, el)
      )?.[0];
    });
    sum += parseInt(numbers.join(""));
  });

  answer.partTwo = String(sum);

  return answer;
};
