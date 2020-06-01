import {Location} from './models/location';

export const parseArrayForLocation = (placeValues: Array<string> ): Array<Location> => {
  const placesWithPostalCode: Array<Location> = [];

  placeValues.forEach((placeValue: string) => {
    const isPostalCode: boolean = new RegExp(/[0-9]+/).test(placeValue);

    if(!isPostalCode) {
      placesWithPostalCode.push({
        name: placeValue
      });
    } else {
      const lastPlaceIndex: number = placesWithPostalCode.length - 1;
      if(lastPlaceIndex >= 0) {
        placesWithPostalCode[lastPlaceIndex] = {
          name: placesWithPostalCode[lastPlaceIndex].name,
          postalCode: placeValue
        };
      }
    }
  });
  return placesWithPostalCode;
}

export const getOpenWeatherUrl = (loc: Location): URL => {
  const openWeatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const openWeatherAppId = 'd31e76a9bca9cae053cba812a883ab11';

  let url: URL; 

  if(loc.postalCode) {
    url = new URL(`${openWeatherApiUrl}?zip=${loc.postalCode}&appid=${openWeatherAppId}`);
  } else {
    url = new URL(`${openWeatherApiUrl}?q=${loc.name}&appid=${openWeatherAppId}`);
  }

  return url;
}

export const kelvinToCelsius = (temp: number): string => (temp - 273.15).toFixed(2).toString() + ' °C';

export const timezoneOffsetToLocalTime = (timezoneOffset: number): string => {
  const localtimeMilliseconds: number = Date.now() + (timezoneOffset * 1000);
  let localTime = new Date(localtimeMilliseconds);
  let hours = localTime.getUTCHours();
  let minutes = localTime.getUTCMinutes();
  let seconds = localTime.getUTCSeconds();
  return `${hours}:${minutes}:${seconds}`;
}
