import {parseArrayForLocation, kelvinToCelsius, timezoneOffsetToLocalTime} from "./helpers";
import {Location} from "./models/location";
import {getCurrentWeather} from "./forecast";
import {OpenWeatherApiResponse} from "./models/open-weather-response";

const places: Array<string> = process.argv.slice(2);

const locations: Array<Location> = parseArrayForLocation(places);

getCurrentWeather(locations)
  .then((data: Array<OpenWeatherApiResponse>) => {
    data.forEach((item: OpenWeatherApiResponse) => {
      console.log({
        name: item.name,
        temperature: kelvinToCelsius(item.main.temp),
        currentTime: timezoneOffsetToLocalTime(item.timezone)
      })
    })
  })
  .catch((err: Error) => {
    console.error('Error: ', err);
  });
