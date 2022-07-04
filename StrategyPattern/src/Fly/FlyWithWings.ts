import FlyBehavior from "./FlyBehavior";

export default class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("날고 있다.");
  }
}
