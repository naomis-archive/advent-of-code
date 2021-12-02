import chalk from "chalk";
import inquirer from "inquirer";

import { solutionData } from "./utils/importSolutions";

(async () => {
  console.log(chalk.greenBright("Welcome to my Advent of Code solutions!"));

  const { year } = await inquirer.prompt([
    {
      type: "list",
      name: "year",
      message: "Which year's solutions would you like to run?",
      choices: Object.keys(solutionData),
    },
  ]);

  const solutionChoices = solutionData[year].map((_, index) =>
    String(index + 1)
  );

  const { day } = await inquirer.prompt([
    {
      type: "list",
      name: "day",
      message: "Which day's solutions would you like to run?",
      choices: solutionChoices,
    },
  ]);

  const solutionToRun = solutionData[year][Number(day) - 1];

  console.time("runtime");

  const answer = await solutionToRun();

  console.timeEnd("runtime");

  console.log(
    `The solution for day ${chalk.cyan(day)} of ${chalk.magenta(year)} is:`
  );
  console.table(answer);
})();
