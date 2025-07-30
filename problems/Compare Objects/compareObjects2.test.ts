import { expect, it, describe } from "vitest";
import { compareObjects2 } from "./compareObjects2";

describe("tes compareObjects2", () => {
  it("should return true if both objects have exactly the sam key/value pairs", () => {
    expect(compareObjects2({ name: "nick" }, { name: "nick" })).toBe(true);
    expect(compareObjects2({ name: "nick" }, { name: "nick", age: 30 })).toBe(
      false
    );
    expect(compareObjects2({ name: "Nick" }, { name: "nick" })).toBe(false);
  });
});
