import { SolutionFunction } from "../interfaces/SolutionFunction";
import { sonarSweep } from "../modules/2021/day01";
import { dive } from "../modules/2021/day02";

export const solutionData: { [key: string]: SolutionFunction[] } = {
  "2021": [sonarSweep, dive],
};
