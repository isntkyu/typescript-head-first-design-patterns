import Cheese from "./ingredient/interface/Cheese";
import Clams from "./ingredient/interface/Clams";
import Dough from "./ingredient/interface/Dough";
import Pepperoni from "./ingredient/interface/Pepperoni";
import Sauce from "./ingredient/interface/Sauce";
import Veggies from "./ingredient/interface/Veggies";

export default abstract class Pizza {
  protected name: string;
  protected dough: Dough;
  protected sauce: Sauce;
  protected veggies: Veggies[];
  protected cheese: Cheese;
  protected pepperoni: Pepperoni;
  protected clam: Clams;

  abstract prepare(): void;

  public bake(): void {
    console.log("175도에서 25분간 굽기~!");
  }

  public cut(): void {
    console.log("피자를 사선으로 짜르기!");
  }

  public box(): void {
    console.log("상자에 피자 담기!");
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public toString(): string {
    let result: string = "----" + this.name + "----\n";

    if (this.dough !== null) {
      result += this.dough + "\n";
    }
    if (this.sauce !== null) {
      result += this.sauce + "\n";
    }
    if (this.cheese !== null) {
      result += this.cheese + "\n";
    }
    if (this.veggies !== null) {
      this.veggies.forEach((veggie) => {
        result += veggie + ", ";
      });
      result += "\n";
    }
    if (this.clam !== null) {
      result += this.clam + "\n";
    }
    if (this.pepperoni !== null) {
      result += this.pepperoni + "\n";
    }

    return result;
  }
}
