import Beverage from "./Beverage";
import CondimentDecorator from "./CondimentDecorator";

export default class Whip extends CondimentDecorator {
  constructor(b: Beverage) {
    super();
    this.beverage = b;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ", 휘핑";
  }

  public cost(): number {
    return this.beverage.cost() + 0.1;
  }
}
