export default abstract class Beverage {
  protected description: string = "제목 없음";

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}
