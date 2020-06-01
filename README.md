## Description:
A simple weather app for getting the weather and current time for a list of locations.

## Usage:
Once you have cloned this repo:
- checkout the `dev` branch: `git checkout dev`
- install dependencies with `npm install`

To see weather and current time details of a list of locations, run the application with npm args including the names and, optionally, the postal/zip codes.

e.g. In order to get details about New York, run the application as follows:

`npm run start -- 'New York'`

You can pass several names and zip codes seperated by spaces. Each numeric value will be treated as the postal/zip code for the preceeding city name.
**NB:** To get proper results for a city with spaces with the name, wrap the full name in quotes. For instance, use 'New York' instead of New York.

To get details for multiple cities, you can start the application with:

`npm run start -- 'New York' 10005 Nairobi London`


Example output:

```json
{ "name": "New York", "temperature": "18.57 °C", "currentTime": "13:6:28"  }
{ "name": "Nairobi", "temperature": "21.56 °C", "currentTime": "20:6:28"  }
{ "name": "London", "temperature": "23.77 °C", "currentTime": "18:6:28"  }

```

## Run Tests

Use `npm run test` to run unit tests
