import nock from 'nock';
import {OpenWeatherApiResponse} from '../src/models/open-weather-response';
import {getCurrentWeather} from '../src/forecast';
import {Location} from '../src/models/location';

describe('parses weather response into proper format', () => {
  beforeEach(() => {
    const openWeatherApiResp: OpenWeatherApiResponse = {
      name: 'Nairobi',
      main: {
        temp: -273.15,
      },
      timezone: 10800
    };
    nock('https://api.openweathermap.org')
      .get('/data/2.5/weather?q=Nairobi&appid=d31e76a9bca9cae053cba812a883ab11')
      .reply(200, openWeatherApiResp);
  })

  it('should parse the response properly', (done) => {
    const locations: Array<Location>  = [
      {
        name: 'Nairobi',
      }
    ];
    getCurrentWeather(locations)
      .then((data: Array<OpenWeatherApiResponse>) => {
        expect(data[0].name).toEqual('Nairobi');
        expect(data[0].timezone).toEqual(10800);
        expect(data[0].main.temp).toEqual(-273.15);
        done();
      });
  });
});
