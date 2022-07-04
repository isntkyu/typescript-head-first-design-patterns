import FlyBehavior from "../Fly/FlyBehavior";
import QuackBehavior from "../Quack/QuackBehavior";

export default abstract class Duck {
  public flyBehavior: FlyBehavior;
  public quackBehavior: QuackBehavior;

  constructor() {}

  public abstract display(): void;

  public performFly(): void {
    this.flyBehavior.fly();
  }

  public performQuack(): void {
    this.quackBehavior.quack();
  }

  public swim(): void {
    console.log("모든 오리는 물에 뜬다. 가짜오리도");
  }

  public setFlyBehavior(fb: FlyBehavior): void {
    this.flyBehavior = fb;
  }

  public setQuackBehavior(qb: QuackBehavior): void {
    this.quackBehavior = qb;
  }
}

// export 할 경우에는 import { 함수명 } from *
// export default 하실 경우에는 import 함수명 from *
