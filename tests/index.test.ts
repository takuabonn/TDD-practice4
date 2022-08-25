import Explore from "../src";

describe("持ち時間 T までに N 部屋まで辿り着けるかを判定", () => {
  test("持ち時間TまでにN部屋まで辿り着ける", () => {
    // 部屋の数
    const N = 4;
    // ボーナス部屋の数
    const M = 1;
    // 持ち時間
    const T = 10;

    // 消費時間配列
    const consumptionTimeArry = [5, 7, 5];
    // ボーナス部屋とボーナス値のペアオブジェクト
    const bonusRoomAndTimeOb = {
      2: 10,
    };
    const explore = new Explore(
      N,
      M,
      T,
      consumptionTimeArry,
      bonusRoomAndTimeOb
    );
    expect(explore.canGoal()).toBe(true);
  });

  test("持ち時間TまでにN部屋まで辿り着けない", () => {
    // 部屋の数
    const N = 4;
    // ボーナス部屋の数
    const M = 1;
    // 持ち時間
    const T = 10;

    // 消費時間配列
    const consumptionTimeArry = [10, 7, 5];
    // ボーナス部屋とボーナス値のペアオブジェクト
    const bonusRoomAndTimeOb = {
      2: 10,
    };
    const explore = new Explore(
      N,
      M,
      T,
      consumptionTimeArry,
      bonusRoomAndTimeOb
    );
    expect(explore.canGoal()).toBe(false);
  });
});
