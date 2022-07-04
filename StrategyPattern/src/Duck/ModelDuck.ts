import FlyNoWay from "../Fly/FlyNoWay";
import Squeak from "../Quack/Squeak";
import Duck from "./Duck";

export default class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Squeak();
  }

  public display(): void {
    console.log("모형 오리입니다.");
  }
}
