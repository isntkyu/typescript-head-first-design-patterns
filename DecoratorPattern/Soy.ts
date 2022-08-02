import Beverage from "./Beverage";
import CondimentDecorator from "./CondimentDecorator";

export default class Soy extends CondimentDecorator {
  constructor(b: Beverage) {
    super();
    this.beverage = b;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ", 두유";
  }

  public cost(): number {
    return this.beverage.cost() + 0.15;
  }
}
