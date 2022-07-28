export default abstract class Pizza {
  protected name: string;
  protected dough: string;
  protected sauce: string;
  protected toppings: string[] = [];

  public prepare(): void {
    console.log("준비중: ", name);
    console.log("도우를 돌리는 중!");
    console.log("소스를 뿌리는 중!");
    console.log("토핑을 올리는 중!");

    this.toppings.forEach((topping) => {
      console.log(" " + topping);
    });
  }

  public bake(): void {
    console.log("175도에서 25분간 굽기~!");
  }

  public cut(): void {
    console.log("피자를 사선으로 짜르기!");
  }

  public box(): void {
    console.log("상자에 피자 담기!");
  }

  public getName(): string {
    return this.name;
  }
}
