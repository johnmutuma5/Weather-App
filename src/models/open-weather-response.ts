interface MainResponseData {
  temp: number
}

export interface OpenWeatherApiResponse {
  main: MainResponseData,
  timezone: number,
  name: string
}
