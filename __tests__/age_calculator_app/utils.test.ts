import { getTimeDiff, validateDate } from "../../src/app/age_calculator_app/utils";

describe("Test calculateTimeDiff", () => {
  // test days
  // We calculate the years first, then the months, then the days
  it.each([
    [{ year: 2020, month: 1, day: 1 }, "2020-01-01", { years: "0", months: "0", days: "0" }],
    [{ year: 2019, month: 12, day: 31 }, "2020-01-01", { years: "0", months: "0", days: "1" }],
    [{ year: 2019, month: 12, day: 30 }, "2020-01-01", { years: "0", months: "0", days: "2" }],
    [{ year: 2019, month: 1, day: 1 }, "2020-01-01", { years: "1", months: "0", days: "0" }],
    [{ year: 2019, month: 6, day: 1 }, "2020-01-01", { years: "0", months: "7", days: "0" }],
    [{ year: 2019, month: 6, day: 2 }, "2020-01-01", { years: "0", months: "6", days: "30" }],
    [{ year: 2020, month: 2, day: 2 }, "2020-03-01", { years: "0", months: "0", days: "28" }],
    [{ year: 2019, month: 2, day: 2 }, "2020-03-01", { years: "1", months: "0", days: "28" }],
    [{ year: 2019, month: 2, day: 2 }, "2019-03-01", { years: "0", months: "0", days: "27" }],
    [{ year: 1970, month: 3, day: 31 }, "2020-06-29", { years: "50", months: "2", days: "29" }],
    [{ year: 1996, month: 7, day: 8 }, "2023-07-01", { years: "26", months: "11", days: "23" }],
  ])("calculateTimeDiff(%s, %s) should return %s", (date1, date2, expected) => {
    const dt1 = new Date(date1.year, date1.month - 1, date1.day);
    const dt2 = new Date(date2);
    expect(getTimeDiff(dt1, dt2)).toStrictEqual(expected);
  });
});

describe("Test validateDate", () => {
  it.each([
    [{ year: 2020, month: 1, day: 1 }, true],
    [{ year: 2020, month: 2, day: 29 }, true],
    [{ year: 2021, month: 2, day: 29 }, false],
    [{ year: 1996, month: 2, day: 29 }, true],
    [{ year: 1996, month: 2, day: 29 }, true],
    [{ year: 1997, month: 2, day: 29 }, false],
    [{ year: 2020, month: 2, day: 30 }, false],
    [{ year: 2022, month: 7, day: 31 }, true],
    [{ year: 2022, month: 7, day: 32 }, false],
    [{ year: 2022, month: 9, day: 30 }, true],
    [{ year: 2022, month: 9, day: 32 }, false],
  ])("validateDate(%s) should return %s", (date, expected) => {
    expect(validateDate(date)[0]).toBe(expected);
  });
});
