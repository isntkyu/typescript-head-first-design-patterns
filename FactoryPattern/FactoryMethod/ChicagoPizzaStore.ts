import ChicagoCheesePizza from "./ChicagoCheesePizza";
import Pizza from "./Pizza";
import PizzaStore from "./PizzaStore";

export default class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    if (type === "cheese") {
      return new ChicagoCheesePizza();
    } else {
      return null;
    }
  }
}
