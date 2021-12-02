export type SolutionFunction = (mockData?: string) => Promise<Solution>;

export interface Solution {
  partOne: string | number;
  partTwo: string | number;
}
