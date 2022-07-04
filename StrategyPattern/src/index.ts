import Duck from "./Duck/Duck";
import MallardDuck from "./Duck/MallardDuck";
import ModelDuck from "./Duck/ModelDuck";
import FlyRocketPowered from "./Fly/FlyRocketPowered";

const mallard: Duck = new MallardDuck();
mallard.performFly();
mallard.performQuack();

let model: ModelDuck = new ModelDuck();
model.performFly();
model.setFlyBehavior(new FlyRocketPowered());
model.performFly();
