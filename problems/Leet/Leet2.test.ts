import { describe, expect, it } from "vitest";
import { leetTranslator2 } from "./Leet2";

describe("it should test leetTranslator", () => {
  it("should return message in leet code", () => {
    expect(leetTranslator2("ab")).toBe("@8");
  });
});
