import Beverage from "./Beverage";

export default class Decaf extends Beverage {
  constructor() {
    super();
    this.description = "디 카페인";
  }

  public cost(): number {
    return 1.05;
  }
}
