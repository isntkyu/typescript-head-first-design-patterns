import Pizza from "./Pizza";

export default abstract class PizzaStore {
  public orderPizza(item: string): Pizza {
    let pizza: Pizza;
    pizza = this.createPizza(item);

    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  protected abstract createPizza(item: string): Pizza;
}
