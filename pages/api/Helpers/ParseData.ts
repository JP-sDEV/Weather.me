interface IHourWeather {
    temp_c: number
}

interface IHours {
    time_epoch: number
}

interface IPrecip {
    precip_mm: number
}

interface IWind {
    wind_kph: number
}

export function ParseHours(raw: any) {
    let parsed = raw.forecast.forecastday[0].hour.map((day: IHours) => {
        let time = new Date(1000 * day.time_epoch)
        return(`${time.getHours()}:00`)
    })

    return parsed;
}

export function ParseDate(rawDate: any) {
    let unixDate = new Date(rawDate * 1000)

    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    
    let month = months[unixDate.getMonth()]
    let date = unixDate.getDate()

    return (`${month} ${date}`)
}

export function ParseTemps(raw: any) {
    let parsed = raw.forecast.forecastday[0].hour.map((day: IHourWeather) => {
        return(day.temp_c)
    })

    return parsed;
}

export function ParsePrecip(raw: any) {
    let parsed = raw.forecast.forecastday[0].hour.map((day: IPrecip) => {
        return(day.precip_mm)
    })

    return parsed;
}

export function ParseWind(raw: any) {
    let parsed = raw.forecast.forecastday[0].hour.map((day: IWind) => {
        return(day.wind_kph)
    })

    return parsed;
}