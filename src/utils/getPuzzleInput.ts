import { readFile } from "fs/promises";
import { join } from "path";

/**
 * Utility to read the input from a text file and return it.
 *
 * @param {string} year The year of the puzzle.
 * @param {string} day The day of the puzzle.
 * @returns {string} The puzzle input.
 */
export const getPuzzleInput = async (
  year: string,
  day: string
): Promise<string> => {
  const data = await readFile(
    join(process.cwd(), "src", "data", year, `day${day}.txt`),
    "utf8"
  );
  return data;
};
