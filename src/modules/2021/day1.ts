import fetch from "node-fetch";

import { SolutionFunction } from "../../interfaces/SolutionFunction";

export const sonarSweep: SolutionFunction = async () => {
  const answer = { partOne: "unsolved", partTwo: "unsolved" };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const input = await fetch("url here");

  return answer;
};
