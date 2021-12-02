import { assert } from "chai";

import { sonarSweep } from "../src/modules/2021/day01";

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
    assert.deepEqual(actual, expected);
  });
});
