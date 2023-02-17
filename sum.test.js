const calculateBonus = require("./sum.js");

describe("Bonus < 50", () => {
  it("Bonus < 50", () => {
    expect(calculateBonus(48, 1)).toBeLessThan(50);
  });
});

describe("Bonus > 50", () => {
  it("Bonus > 50", () => {
    expect(calculateBonus(50, 1)).toBe(50);
  });
});

describe("Bonus = 50", () => {
  it("Bonus = 50", () => {
    expect(calculateBonus(48, 2)).toBe(50);
    expect(calculateBonus(48, 2)).toEqual(50);
  });
});