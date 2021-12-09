import { assert } from "chai";

import { sonarSweep } from "../src/modules/2021/day01";
import { dive } from "../src/modules/2021/day02";
import { binaryDiagonstic } from "../src/modules/2021/day03";
import { giantSquid } from "../src/modules/2021/day04";
import { hydrothermalVenture } from "../src/modules/2021/day05";
import { lanternfish } from "../src/modules/2021/day06";
import { treacheryOfWhales } from "../src/modules/2021/day07";
import { sevenSegmentSearch } from "../src/modules/2021/day08";
import { smokeBasin } from "../src/modules/2021/day09";

suite("2021 Solutions", () => {
  test("Day 01", async () => {
    console.time("2021 Day 01");
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
    console.timeEnd("2021 Day 01");
  });

  test("Day 02", async () => {
    console.time("2021 Day 02");
    const data = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;
    const expected = { partOne: "150", partTwo: "900" };
    const actual = await dive(data);
    assert.deepEqual(actual, expected, "Day 02 does not pass the mock data.");
    console.timeEnd("2021 Day 02");
  });

  test("Day 03", async () => {
    console.time("2021 Day 03");
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
    console.timeEnd("2021 Day 03");
  });

  test("Day 04", async () => {
    console.time("2021 Day 04");
    const data = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
8  2 23  4 24
21  9 14 16  7
6 10  3 18  5
1 12 20 15 19

3 15  0  2 22
9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
2  0 12  3  7`;
    const expected = { partOne: "4512", partTwo: "1924" };
    const actual = await giantSquid(data);
    assert.deepEqual(actual, expected, "Day 04 does not pass the mock data.");
    console.timeEnd("2021 Day 04");
  });

  test("Day 05", async () => {
    console.time("2021 Day 05");
    const data = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;
    const expected = { partOne: "5", partTwo: "12" };
    const actual = await hydrothermalVenture(data);
    assert.deepEqual(actual, expected, "Day 05 does not pass the mock data.");
    console.timeEnd("2021 Day 05");
  });

  test("Day 06", async () => {
    console.time("2021 Day 06");
    const data = `3,4,3,1,2`;
    const expected = { partOne: "5934", partTwo: "26984457539" };
    const actual = await lanternfish(data);
    assert.deepEqual(actual, expected, "Day 06 does not pass the mock data.");
    console.timeEnd("2021 Day 06");
  });

  test("Day 07", async () => {
    console.time("2021 Day 07");
    const data = `16,1,2,0,4,2,7,1,2,14`;
    const expected = { partOne: "37", partTwo: "168" };
    const actual = await treacheryOfWhales(data);
    assert.deepEqual(actual, expected, "Day 07 does not pass the mock data.");
    console.timeEnd("2021 Day 07");
  });

  test("Day 08", async () => {
    console.time("2021 Day 08");
    const data = `be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe
edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc
fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg
fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb
aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea
fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb
dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe
bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef
egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb
gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce`;
    const expected = { partOne: "26", partTwo: "61229" };
    const actual = await sevenSegmentSearch(data);
    assert.deepEqual(actual, expected, "Day 08 does not pass the mock data.");
    console.timeEnd("2021 Day 08");
  });

  test("Day 09", async () => {
    console.time("2021 Day 09");
    const data = `2199943210
3987894921
9856789892
8767896789
9899965678`;
    const expected = { partOne: "15", partTwo: "1134" };
    const actual = await smokeBasin(data);
    assert.deepEqual(actual, expected, "Day 09 does not pass the mock data.");
    console.timeEnd("2021 Day 09");
  });
});
