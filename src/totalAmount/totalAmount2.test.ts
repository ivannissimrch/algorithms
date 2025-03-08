import { describe, expect, it } from "vitest";
import { lastFridayNight } from "./totalAmount2";

describe("total mount(last friday night", () => {
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
  it("should return sum of amounts in array of transactions", () => {
    expect(lastFridayNight(transactions)).toBe(350);
  });

  it("should handle zero amounts", () => {
    const transactions = [
      { name: "Free item", amount: 0 },
      { name: "Purchase", amount: 100 },
    ];
    expect(lastFridayNight(transactions)).toBe(100);
  });

  it("should handle negative amounts", () => {
    const transactions = [
      { name: "Refund", amount: -100 },
      { name: "Purchase", amount: 200 },
    ];
    expect(lastFridayNight(transactions)).toBe(100);
  });
});
