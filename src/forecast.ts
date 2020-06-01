import {Buffer} from "buffer";
import {get} from "https";
import {IncomingMessage, ClientRequest} from "http";

import {Location} from "./models/location";
import {getOpenWeatherUrl} from "./helpers";
import {OpenWeatherApiResponse} from "./models/open-weather-response";

export const getCurrentWeather = (locations: Array<Location>): Promise<Array<OpenWeatherApiResponse>> => {
  return Promise.all<OpenWeatherApiResponse>(
    locations.map((loc: Location) => {
      return new Promise<OpenWeatherApiResponse>((resolve, reject) => {
        const respChunks: Array<any> = [];

        const url: URL = getOpenWeatherUrl(loc);

        const req:ClientRequest = get(url, (res: IncomingMessage) => {
          if(res.statusCode && (res.statusCode < 200 || res.statusCode >= 300)) {
            return reject(new Error('Error: ' + res.statusCode));
          }
          res.on('data', (chunk: any) => {
            respChunks.push(chunk);
          });

          res.on('end', () => {
            const body: OpenWeatherApiResponse = JSON.parse(Buffer.concat(respChunks).toString());
            return resolve(body);
          })
        });

        req.on('error', (err: Error) => {
          console.error(err);
        });
        req.end();
      })
    })
  );
}
