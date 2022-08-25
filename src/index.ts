export default class Explore {
  private roomAmount: number;
  private bonusRoomAmount: number;
  private havingTime: number;
  private consumptionTimeArry: number[];
  private bonusRoomAndTimeOb: { [key: number]: number };

  constructor(
    roomAmount: number,
    bonusRoomAmount: number,
    havingTime: number,
    consumptionTimeArry: number[],
    bonusRoomAndTimeOb: { [key: number]: number }
  ) {
    this.roomAmount = roomAmount;
    this.bonusRoomAmount = bonusRoomAmount;
    this.havingTime = havingTime;
    this.consumptionTimeArry = consumptionTimeArry;
    this.bonusRoomAndTimeOb = bonusRoomAndTimeOb;
  }
  canGoal = () => {
    let canGoal = true;
    for (let i = 2; i <= this.roomAmount; i++) {
      this.havingTime -= this.consumptionTimeArry[i - 2];
      if (this.havingTime <= 0) {
        canGoal = false;
        break;
      }

      if (this.bonusRoomAndTimeOb[i]) {
        this.havingTime += this.bonusRoomAndTimeOb[i];
      }
    }
    return canGoal;
  };
}
