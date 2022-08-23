
import { WeatherModel } from "../Model/weather.model.js"
import { options, baseurl } from "../config.js"

const cityName = "recife"
const url = `${baseurl}weather?q=${cityName}&units=${options.units}&appid=${options.appid}&&lang=${options.lang.toLowerCase()}`

export class WeatherService{
    constructor(){
        this.weatherData = {}
    }

    async getWeatherByCityName(cityName){
        console.log(cityName)
    }
}

