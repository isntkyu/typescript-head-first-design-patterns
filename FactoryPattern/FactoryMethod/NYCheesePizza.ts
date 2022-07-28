import Pizza from "./Pizza";

export default class NYCheesePizza extends Pizza {
  constructor() {
    super();

    this.name = "뉴욕 스타일 소스의 치즈피자";
    this.dough = "씬 크러스트 도우";
    this.sauce = "마리나라 소스";

    this.toppings.push("잘~게 썬 레지아노 치즈");
  }

  public cut(): void {
    console.log("네모난 모양으로 피자 자르기");
  }
}
