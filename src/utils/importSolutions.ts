import { SolutionFunction } from "../interfaces/SolutionFunction";
import { reportRepair } from "../modules/2020/day01";
import { sonarSweep } from "../modules/2021/day01";
import { dive } from "../modules/2021/day02";
import { binaryDiagonstic } from "../modules/2021/day03";
import { giantSquid } from "../modules/2021/day04";
import { hydrothermalVenture } from "../modules/2021/day05";
import { lanternfish } from "../modules/2021/day06";
import { treacheryOfWhales } from "../modules/2021/day07";
import { sevenSegmentSearch } from "../modules/2021/day08";
import { smokeBasin } from "../modules/2021/day09";
import { syntaxScoring } from "../modules/2021/day10";
import { dumboOctopus } from "../modules/2021/day11";

export const solutionData: { [key: string]: SolutionFunction[] } = {
  "2020": [reportRepair],
  "2021": [
    sonarSweep,
    dive,
    binaryDiagonstic,
    giantSquid,
    hydrothermalVenture,
    lanternfish,
    treacheryOfWhales,
    sevenSegmentSearch,
    smokeBasin,
    syntaxScoring,
    dumboOctopus,
  ],
};
