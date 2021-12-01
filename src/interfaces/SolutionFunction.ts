export type SolutionFunction = () => Promise<Solution>;

export interface Solution {
  partOne: string | number;
  partTwo: string | number;
}
