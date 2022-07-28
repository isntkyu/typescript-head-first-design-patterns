import ChicagoPizzaStore from "./ChicagoPizzaStore";
import NYPizzaStore from "./NYPizzaStore";
import Pizza from "./Pizza";

const nyStore: NYPizzaStore = new NYPizzaStore();
const chicagoStore: ChicagoPizzaStore = new ChicagoPizzaStore();

let pizza: Pizza = nyStore.orderPizza("cheese");
console.log("내가 주문한 ", pizza.getName());

pizza = chicagoStore.orderPizza("cheese");
console.log("니가 주문한 ", pizza.getName());
