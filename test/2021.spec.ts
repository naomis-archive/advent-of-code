import { assert } from "chai";

import { sonarSweep } from "../src/modules/2021/day01";
import { dive } from "../src/modules/2021/day02";
import { binaryDiagonstic } from "../src/modules/2021/day03";

suite("2021 Solutions", () => {
  test("Day 01", async () => {
    const data = `199
200
208
210
200
207
240
269
260
263`;
    const expected = { partOne: "7", partTwo: "5" };
    const actual = await sonarSweep(data);
    assert.deepEqual(actual, expected, "Day 01 does not pass the mock data.");
  });

  test("Day 02", async () => {
    const data = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;
    const expected = { partOne: "150", partTwo: "900" };
    const actual = await dive(data);
    assert.deepEqual(actual, expected, "Day 02 does not pass the mock data.");
  });

  test("Day 03", async () => {
    const data = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;
    const expected = { partOne: "198", partTwo: "230" };
    const actual = await binaryDiagonstic(data);
    assert.deepEqual(actual, expected, "Day 03 does not pass the mock data.");
  });
});
