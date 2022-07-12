import Observer from "./Observer";
import Subject from "./Subject";

export default class WeatherData implements Subject {
  private temp: number;
  private humidity: number;
  private pressure: number;
  private observers: Observer[];
  constructor() {
    this.observers = [];
  }

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    let index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObserver(): void {
    this.observers.forEach((o) => {
      o.update(this.temp, this.humidity, this.pressure);
    });
  }

  measurementsChanged(): void {
    this.notifyObserver();
  }

  setMeasurements(temp: number, humidity: number, pressure: number): void {
    this.humidity = humidity;
    this.temp = temp;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}
