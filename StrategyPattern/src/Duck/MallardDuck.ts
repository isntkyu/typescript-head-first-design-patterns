import FlyWithWings from "../Fly/FlyWithWings";
import { Quack } from "../Quack/Quack";
import Duck from "./Duck";

export default class MallardDuck extends Duck {
  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }

  public display(): void {
    console.log("저는 물오리에요.");
  }
}
