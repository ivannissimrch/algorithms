import { describe, expect, it } from "vitest";
import { lastFridayNight } from "./totalAmount2";

const transactions = [
  {
    name: "Tons of glitter",
    amount: 50,
  },

  {
    name: "Dinner at TGIF x6",
    amount: 300,
  },
];

describe("total mount(last friday night", () => {
  it("should return sum of amounts in array of transactions", () => {
    expect(lastFridayNight(transactions)).toBe(350);
  });
});
