import Beverage from "./Beverage";
import CondimentDecorator from "./CondimentDecorator";

export default class Mocha extends CondimentDecorator {
  constructor(b: Beverage) {
    super();
    this.beverage = b;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ", 모카";
  }

  public cost(): number {
    return this.beverage.cost() + 0.2;
  }
}
