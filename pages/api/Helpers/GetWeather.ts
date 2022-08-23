export interface WeatherAPIResponse {
    location: any
    current: {
        location: {
          name: String
        }, // remove when asking user to input location
        last_updated_epoch?: Date | "",
        temp_c: number,
        condition: {
            text: String,
            code: number,
        },
        wind_kph: number,
        wind_dir: String,
        precip_mm: number,
        humidity:number,
        cloud: number,
        feelslike_c: number,
        uv: number,
    },
    forecast: {
      forecastday: HourlyWeather[],
    }
}

interface HourlyWeather extends WeatherAPIResponse{
    time_epoch: Date,
    temp_c: number,
    condition: {
        text: String,
        code: number,
    },
    wind_kph: number,
    wind_dir: String,
    precip_mm:number,
    humidity: number,
    cloud: number,
    feelslike_c: number,
    windchill_c: number,
    will_it_rain: number,
    chance_of_rain: number,
    daily_chance_of_rain: number,
    will_it_snow: number,
    chance_of_snow: number,
    uv: number,
    day: HourlyWeather

}

async function GetWeather<WeatherAPIResponse>(location: string): Promise<WeatherAPIResponse>{
    const searchURL = "http://api.weatherapi.com/v1/forecast.json?" + new URLSearchParams({
        key: `${process.env.WEATHER_API_KEY}`,
        q: location,
        aqi: 'no',
        alerts: 'no'
    })

    return await fetch(searchURL, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
          },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .then(data => { /* <-- data inferred as { data: T }*/
        return data
      })
  }

export default GetWeather;