import { it, expect, describe } from "vitest";
import { reverseString, reverseString2 } from "./reverseString2";

describe("reverseString", () => {
  it("should reverse a string", () => {
    expect(reverseString("stressed")).toBe("desserts");
    expect(reverseString("")).toBe("");
    expect(reverseString("a")).toBe("a");
    expect(reverseString("Hello world")).toBe("dlrow olleH");
    expect(reverseString("racecar")).toBe("racecar");
  });
});

describe("reverseString2", () => {
  it("should reverse a string using a for...of loop", () => {
    expect(reverseString2("stressed")).toBe("desserts");
    expect(reverseString2("")).toBe("");
    expect(reverseString2("a")).toBe("a");
    expect(reverseString2("Hello world")).toBe("dlrow olleH");
    expect(reverseString2("racecar")).toBe("racecar");
  });
});
