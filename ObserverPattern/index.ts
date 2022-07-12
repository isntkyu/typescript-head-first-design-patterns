import CurrentConditionDisplay from "./display/CurrentConditionDisplay";
import WeatherData from "./WeatherData";

const weatherData: WeatherData = new WeatherData();

const currentConditionDisplay: CurrentConditionDisplay =
  new CurrentConditionDisplay(weatherData);

weatherData.setMeasurements(80, 65, 35.4);
