import { SolutionFunction } from "../interfaces/SolutionFunction";
import { reportRepair } from "../modules/2020/day01";
import { sonarSweep } from "../modules/2021/day01";
import { dive } from "../modules/2021/day02";
import { binaryDiagonstic } from "../modules/2021/day03";

export const solutionData: { [key: string]: SolutionFunction[] } = {
  "2020": [reportRepair],
  "2021": [sonarSweep, dive, binaryDiagonstic],
};
