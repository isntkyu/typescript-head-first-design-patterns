import Observer from "../Observer";
import Subject from "../Subject";
import WeatherData from "../WeatherData";
import DisplayElement from "./DisplayElement";

export default class CurrentConditionDisplay
  implements Observer, DisplayElement
{
  private temp: number;
  private humidity: number;
  private weatherData: Subject;

  constructor(wd: Subject) {
    this.weatherData = wd; // 알고는 잇어야함
    wd.registerObserver(this);
  }

  update(temp: number, humidity: number, pressure: number): void {
    this.temp = temp;
    this.humidity = humidity;
    this.display();
  }

  display(): void {
    console.log(`현재 상태: 온도: ${this.temp}F, 습도: ${this.humidity}%`);
  }
}
