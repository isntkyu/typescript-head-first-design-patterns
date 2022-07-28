import Cheese from "./ingredient/interface/Cheese";
import Clams from "./ingredient/interface/Clams";
import Dough from "./ingredient/interface/Dough";
import Pepperoni from "./ingredient/interface/Pepperoni";
import Sauce from "./ingredient/interface/Sauce";
import Veggies from "./ingredient/interface/Veggies";

export default interface PizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createVeggies(): Veggies[];
  createPepperoni(): Pepperoni;
  createClams(): Clams;
}
