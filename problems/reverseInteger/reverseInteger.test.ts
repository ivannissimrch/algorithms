import { describe, expect, it } from "vitest";
import { reverseInteger } from "./reverseInteger";

describe("test reverse integer function", () => {
  it("should reverseInteger function exists", () => {
    expect(reverseInteger).toBeDefined();
  });

  it("should handle 0 as an input", () => {
    expect(reverseInteger(0)).toEqual(0);
  });

  it("should flip a positive number", () => {
    expect(reverseInteger(5)).toEqual(5);
    expect(reverseInteger(15)).toEqual(51);
    expect(reverseInteger(90)).toEqual(9);
  });

  it("should flip a negative number", () => {
    expect(reverseInteger(-5)).toEqual(-5);
    expect(reverseInteger(-15)).toEqual(-51);
    expect(reverseInteger(-90)).toEqual(-9);
  });
});
