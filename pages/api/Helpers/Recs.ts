import Umbrella from "../../../public/icons/umbrella.svg"
import Sun from "../../../public/icons/sun-weather.svg"

import ThermometerCold from "../../../public/icons/thermometer-cold.svg"
import ThermometerTemp from "../../../public/icons/thermometer-temperature.svg"
import Sunrise from "../../../public/icons/sunrise-evening.svg"
import Humidity from "../../../public/icons/humidity.svg"
import Celcius from "../../../public/icons/celsius-thermometer.svg"
import WaterBottle from "../../../public/icons/water-bottle.svg"
import Sunscreen from "../../../public/icons/sunscreen.svg"
import Sunglasses from "../../../public/icons/sunglasses.svg"

export async function GetRecommendations(rec: string, data: any, curr: any) {
    let recommendation;

    switch(rec) {
        
        case "umbrella":
            recommendation = GetSingleRecommendation(rec, data?.forecastday[0].day, curr)
            return recommendation
            
        case "coat":
            recommendation = GetSingleRecommendation(rec, data?.forecastday[0].day, curr)
            return recommendation

        case "water":
            recommendation = GetSingleRecommendation(rec, data?.forecastday[0].day, curr)
            return recommendation
            
        case "sunglasses":
            recommendation = GetSingleRecommendation(rec, data?.forecastday[0].day, curr)
            return recommendation
            
        case "sunscreen":
            recommendation = GetSingleRecommendation(rec, data?.forecastday[0].day, curr)
            return recommendation

    }

    return recommendation
}

function GetSingleRecommendation(rec: string, dayWeather: any, curr: any) {
    let recObj = {
        text: "",
        icon: "",
        stat: "",
    }

    switch(rec) {
        case "umbrella":
           if (dayWeather?.daily_chance_of_rain >= 50 || curr?.precip_mm > 0) {
            recObj.text = "bring an umbrella"
            recObj.icon = Umbrella
            recObj.stat = `${dayWeather?.daily_chance_of_rain}%` 
            break

           } else {
            recObj.text = "leave the umbrella at home"
            recObj.icon = Sun
            recObj.stat = `${dayWeather?.daily_chance_of_rain}%` 
            break

           }

        case "coat":
            const tempDiff = dayWeather?.maxtemp_c - curr?.temp_c
            if (curr?.feelslike_c <= 5) {
                recObj.text = "wear your winter coat"
                recObj.icon = ThermometerCold
                recObj.stat = `${curr?.temp_c}°C` 
                break
                
            } else if (curr?.temp_c > 5 && curr?.temp_c < 15) {
                if (tempDiff <= 15) {
                    recObj.text = "bring a sweater, it's going to be cold later!"
                    recObj.icon = ThermometerCold
                    recObj.stat = `${curr?.temp_c}°C` 
                    break

                } else {
                    recObj.text = "bring a sweater, it's currently cold!"
                    recObj.icon = ThermometerCold
                    recObj.stat = `${curr?.temp_c}°C` 
                    break

                }
            } else {
                recObj.text = "it's warm - enjoy the warmth!"
                recObj.icon = ThermometerTemp
                recObj.stat = `${curr?.temp_c}°C` 
                break
            }

        case "water":
            if (curr?.temp_c >= 20 || curr?.humidity >= 55) {
                recObj.text = "bring a water bottle!"
                recObj.icon = WaterBottle
                recObj.stat = `${curr?.humidity}RH` 
                break

            } else if (curr?.temp_c < 20 && dayWeather?.maxtemp_c >= 20) {
                recObj.text = "keep hydrated! - it's going to get warmer today"
                recObj.icon = WaterBottle
                recObj.stat = `${curr?.humidity}RH` 
                break

            } else {
                recObj.text = "water bottle is optional"
                recObj.icon = Humidity
                recObj.stat = `${curr?.humidity}RH` 
                break
            }

        case "sunglasses":
            if (curr?.uv >=5 && curr?.uv <=3) {
                recObj.text = "sunglasses are recommended!"
                recObj.icon = Sunglasses
                recObj.stat = `${curr?.uv}UV` 
                break

            } else if ( curr?.uv >=6 ) {
                recObj.text = "sunglasses are highly recommended!"
                recObj.icon = Sunglasses
                recObj.stat = `${curr?.uv}UV` 
                break

            } else {
                recObj.text = "sunglasses are optional!"
                recObj.icon = Sunrise
                recObj.stat = `${curr?.uv}UV` 
                break

            }

        case "sunscreen":
            if (curr?.uv >=0 && curr?.uv <=2) {
                recObj.text = "SPF 30"
                recObj.icon = Sunrise
                recObj.stat = `${curr?.uv}UV` 
                break

            } else if (curr?.uv >=3 && curr?.uv <=5) {
                recObj.text = "SPF 30, apply every 45min"
                recObj.icon = Sunscreen
                recObj.stat = `${curr?.uv}UV` 
                break

            } else if (curr?.uv >=6 && curr?.uv <=7) {
                recObj.text = "SPF 30, apply every 25min"
                recObj.icon = Sunscreen
                recObj.stat = `${curr?.uv}UV` 
                break
                
            } else if (curr?.uv >=8 && curr?.uv <=10) {
                recObj.text = "SPF 30, apply every 15min - minimize sun exposure"
                recObj.icon = Sunscreen
                recObj.stat = `${curr?.uv}UV` 
                break

            } else {
                recObj.text = "SPF 30, apply every 10min - stay inside if possible!"
                recObj.icon = Sunscreen
                recObj.stat = `${curr?.uv}UV` 
                break

            }

    }
    
    return recObj
}