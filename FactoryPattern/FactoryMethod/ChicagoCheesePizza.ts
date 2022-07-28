import Pizza from "./Pizza";

export default class ChicagoCheesePizza extends Pizza {
  constructor() {
    super();

    this.name = "시카고 스타일 딥 디쉬 치즈 피자";
    this.dough = "아주 두꺼운 크러스트 도우";
    this.sauce = "플럼토마토 소스";

    this.toppings.push("잘~게 썬 모짜렐라 치즈");
  }
}
