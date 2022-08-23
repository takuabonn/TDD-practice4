import Explore from "../src";

describe("持ち時間 T までに N 部屋まで辿り着けるかを判定", () => {
  test("持ち時間TまでにN部屋まで辿り着ける", () => {
    const explore = new Explore();
    expect(explore.canGoal()).toBe(true);
  });
});
