import FreshClams from "./ingredient/FreshClams";
import Garlic from "./ingredient/Garlic";
import Cheese from "./ingredient/interface/Cheese";
import Clams from "./ingredient/interface/Clams";
import Dough from "./ingredient/interface/Dough";
import Pepperoni from "./ingredient/interface/Pepperoni";
import Sauce from "./ingredient/interface/Sauce";
import Veggies from "./ingredient/interface/Veggies";
import MarinaraSauce from "./ingredient/MarinaraSauce";
import Mushroom from "./ingredient/Mushroom";
import Onion from "./ingredient/Onion";
import RedPepper from "./ingredient/RedPepper";
import ReggianoCheese from "./ingredient/ReggianoCheese";
import SlicedPepperoni from "./ingredient/SlicedPepperoni";
import ThinCrustDough from "./ingredient/ThinCrustDough";
import PizzaIngredientFactory from "./PizzaIngredientFactory";

export default class NYPizzaIngredientFactory
  implements PizzaIngredientFactory
{
  public createCheese(): Cheese {
    return new ReggianoCheese();
  }
  public createClams(): Clams {
    return new FreshClams();
  }
  public createDough(): Dough {
    return new ThinCrustDough();
  }
  public createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }
  public createSauce(): Sauce {
    return new MarinaraSauce();
  }
  public createVeggies(): Veggies[] {
    let veggies: Veggies[];
    veggies.push(new Onion());
    veggies.push(new Garlic());
    veggies.push(new RedPepper());
    veggies.push(new Mushroom());
    return veggies;
  }
}
