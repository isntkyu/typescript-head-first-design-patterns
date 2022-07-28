import NYCheesePizza from "./NYCheesePizza";
import Pizza from "./Pizza";
import PizzaStore from "./PizzaStore";

export default class NYPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    if (type === "cheese") {
      return new NYCheesePizza();
    } else {
      return null;
    }
  }
}
