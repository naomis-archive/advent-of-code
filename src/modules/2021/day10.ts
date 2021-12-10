import { SolutionFunction } from "../../interfaces/SolutionFunction";
import { getPuzzleInput } from "../../utils/getPuzzleInput";

const isClosingBrace = (brace: string): boolean => {
  return ["}", "]", ">", ")"].includes(brace);
};

const getOpeningBrace = (brace: string): string => {
  switch (brace) {
    case "}":
      return "{";
    case "]":
      return "[";
    case ">":
      return "<";
    case ")":
      return "(";
    default:
      throw new Error("Invalid brace");
  }
};

const getClosingBrace = (brace: string): string => {
  switch (brace) {
    case "{":
      return "}";
    case "[":
      return "]";
    case "<":
      return ">";
    case "(":
      return ")";
    default:
      throw new Error("Invalid brace");
  }
};

const invalidPoints: Record<string, number> = {
  ")": 3,
  "]": 57,
  "}": 1197,
  ">": 25137,
};

const autoCompletePoints: Record<string, number> = {
  ")": 1,
  "]": 2,
  "}": 3,
  ">": 4,
};

export const syntaxScoring: SolutionFunction = async (mockData) => {
  const answer = { partOne: "unsolved", partTwo: "unsolved" };
  const input = mockData || (await getPuzzleInput("2021", "10"));
  const parsed = input.split("\n");

  let corruptedFirstCharacters = 0;
  const autoCompleteScores: number[] = [];
  parsed.forEach((line) => {
    const braces: string[] = [];
    let corrupted = false;
    for (const character of line) {
      if (isClosingBrace(character)) {
        if (braces[0] !== getOpeningBrace(character)) {
          corruptedFirstCharacters += invalidPoints[character];
          corrupted = true;
          break;
        }
        braces.shift();
        continue;
      }
      braces.unshift(character);
    }
    if (!corrupted) {
      const autoCompleteSequence = braces.map((brace) =>
        getClosingBrace(brace)
      );
      const autoCompleteScore = autoCompleteSequence.reduce(
        (acc, el) => acc * 5 + autoCompletePoints[el],
        0
      );
      autoCompleteScores.push(autoCompleteScore);
    }
  });

  answer.partOne = String(corruptedFirstCharacters);

  answer.partTwo = String(
    autoCompleteScores.sort((a, b) => a - b)[
      Math.floor(autoCompleteScores.length / 2)
    ]
  );
  return answer;
};
