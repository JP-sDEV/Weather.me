import Celcius from "../public/icons/celsius-thermometer.svg"
import Cloud from "../public/icons/cloud.svg"
import CloudClouded from "../public/icons/cloudy-clouded.svg"
import CloudyNight from "../public/icons/cloudy-night-cloud.svg"
import Cloudy from "../public/icons/cloudy.svg"
import CloudyClouded from "../public/icons/cloudy-clouded.svg"
import FullMoon from "../public/icons/full-moon-moon.svg"
import HailingHail from "../public/icons/hailing-hail.svg"
import HalfMoon from "../public/icons/half-moon-moon.svg"
import Humidity from "../public/icons/humidity.svg"
import NightMoon from "../public/icons/night-moon.svg"
import RainStorm from "../public/icons/rain-storm.svg"
import Rain from "../public/icons/rain.svg"
import Rainbow from "../public/icons/rainbow.svg"
import SnowFlake from "../public/icons/snowflake.svg"
import Snowy from "../public/icons/snowy-weather.svg"
import StarryNight from "../public/icons/starry-night-moon.svg"
import StormAlt from "../public/icons/storm-alt.svg"
import Storm from "../public/icons/storm.svg"
import Sun from "../public/icons/sun-weather.svg"
import Sunrise from "../public/icons/sunrise-evening.svg"
import ThermometerCold from "../public/icons/thermometer-cold.svg"
import ThermometerFreezing from "../public/icons/thermometer-freezing.svg"
import ThermometerTemp from "../public/icons/thermometer-temperature.svg"
import Thunder from "../public/icons/thunder.svg"
import Tornado from "../public/icons/tornado.svg"
import Umbrella from "../public/icons/umbrella.svg"
import Wind from "../public/icons/wind.svg"


export const IconMap = {
    
        "1000": { "text":"Sunny",
                  "icon": Sun
                },
	
	
        "1003": {"text":"Partly cloudy",
                 "icon": CloudyClouded
                },
	
	
        "1006": {"text":"Cloudy",
                "icon": Cloud
                },
		
	
	
        "1009": {"text":"Overcast",
                 "icon": Cloudy
                },
		
	
	
        "1030": {"text":"Mist",
                 "icon": RainStorm
                },
		
	
	
        "1063": {"text":"Patchy rain possible",
                 "icon": RainStorm
                },
		
	
	
        "1066": {"text":"Patchy snow possible",
                 "icon": Snowy
                },
		
	
	
        "1069": {"text":"Patchy sleet possible",
                 "icons": Snowy
                },
		
	
	
        "1072": {"text":"Patchy freezing drizzle possible",
                 "icons": Rain
                },
		
	
	
        "1087": {"text":"Thundery outbreaks possible",
                 "icons": Storm
                },
		
	
	
        "1114": {"text":"Blowing snow",
                 "icons": Snowy
                },
		
	
	
        "1117": {"text":"Blizzard",
                 "icons": HailingHail
                },
		
	
	
        "1135": {"text":"Fog",
                 "icons": Cloud
                },
		
	
	
        "1147": {"text":"Freezing fog",
                 "icons": Cloudy
                },
		
	
	
        "1150": {"text":"Patchy light drizzle",
                 "icons": RainStorm
                },
		
	
	
        "1153": {"text":"Light drizzle",
                 "icons": RainStorm
                },
		
	
	
        "1168": {"text":"Freezing drizzle",
                 "icons": RainStorm
                },
		
	
	
        "1171": {"text":"Heavy freezing drizzle",
                 "icons": Rain
                },
		
	
	
        "1180": {"text":"Patchy light rain",
                 "icons": RainStorm
                },
		
	
	
        "1183": {"text":"Light rain",
                 "icons": RainStorm
                },
		
	
	
        "1186": {"text":"Moderate rain at times",
                 "icons": Rain
                },
		
	
	
        "1189": {"text":"Moderate rain",
                 "icons": Rain
                },
		
	
	
        "1192": {"text":"Heavy rain at times",
                 "icons": Storm
                },
		
	
	
        "1195": {"text":"Heavy rain",
                 "icons": Storm
                },
		
	
	
        "1198": {"text":"Light freezing rain",
                 "icons": RainStorm
                },
		
	
	
        "1201": {"text":"Moderate or heavy freezing rain",
                 "icons": Rain
                },
		
	
	
        "1204": {"text":"Light sleet",
                 "icons": Snowy
                },
		
	
	
        "1207": {"text":"Moderate or heavy sleet",
                 "icons": Rain
                },
		
	
	
        "1210": {"text":"Patchy light snow",
                 "icons": Snowy
                },
		
	
	
        "1213": {"text":"Light snow",
                 "icons": Snowy
                },
		
	
	
        "1216": {"text":"Patchy moderate snow",
                 "icons": Snowy
                },
		
	
	
        "1219": {"text":"Moderate snow",
                 "icons": Snowy
                },
		
	
        "1222": {"text":"Patchy heavy snow",
                 "icons": HailingHail
                },
		
	
	
        "1225": {"text":"Heavy snow",
                 "icons": HailingHail
                },
		
	
	
        "1237": {"text":"Ice pellets",
                 "icons": HailingHail
                },
		
	
	
        "1240": {"text":"Light rain shower",
                 "icons": RainStorm
                },
		
	
	
        "1243": {"text":"Moderate or heavy rain shower",
                 "icons": Rain
                },
		
	
	
        "1246": {"text":"Torrential rain shower",
                 "icons": Rain
                },
		
	
	
        "1249": {"text":"Light sleet showers",
                 "icons": RainStorm
                },
		
	
	
        "1252": { "text":"Moderate or heavy sleet showers",
                  "icon": Rain
                },
	

        "1255": { "text":"Light snow showers",
                  "icon": RainStorm
                },
		
	
	
        "1258": {
                "text":"Moderate or heavy snow showers",
                 "icon": Rain
                },
		
	
	
        "1261": {
                 "text":"Light showers of ice pellets",
                 "icon": HailingHail
                },
		
	
	
        "1264": {
                 "text":"Moderate or heavy showers of ice pellets",
                 "icon": HailingHail
                },
		
	
	
        "1273": {
                 "text":"Patchy light rain with thunder",
                 "icon": RainStorm
                },
		
	
	
        "1276": {
                 "text":"Moderate or heavy rain with thunder",
                 "icon": Storm
                },
		
	
	
        "1279": {
                 "text":"Patchy light snow with thunder",
                 "icon": Storm
                },
		
	
	
        "1282": {"text": "Moderate or heavy snow with thunder",
                 "icon": Storm
                }
		
}