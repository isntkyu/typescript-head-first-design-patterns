import FlyBehavior from "./FlyBehavior";

export default class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log("못 난다.");
  }
}
