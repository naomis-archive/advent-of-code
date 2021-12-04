import { assert } from "chai";

import { reportRepair } from "../src/modules/2020/day01";

suite("2020 Solutions", () => {
  test("Day 01", async () => {
    console.time("2020 Day 01");
    const data = `1721
979
366
299
675
1456`;
    const expected = { partOne: "514579", partTwo: "241861950" };
    const actual = await reportRepair(data);
    assert.deepEqual(actual, expected, "Day 01 does not pass the mock data.");
    console.timeEnd("2020 Day 01");
  });
});
