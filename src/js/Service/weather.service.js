
import { WeatherModel } from "../Model/weather.model.js"

import { createFetch } from "../createFetch.js"

import { options, baseurl } from "../config.js"


export class WeatherService{
    constructor(){
        this.weatherData = {}
    }
    
    async getWeatherByCityName(cityName){
        console.log(cityName)

        const url = `${baseurl}weather?q=${cityName}&units=${options.units}&appid=${options.appid}&&lang=${options.lang.toLowerCase()}`.toLocaleLowerCase()

        await createFetch(url)
            .then(data => {

                let {sys, main, coord, weather, wind, name} = data
                weather = weather[0]

                const { country } = sys
                const { temp, temp_min, temp_max, humidity} = main
                const { speed } = wind

                this.weatherData = new WeatherModel(name, country, humidity, temp, temp_max, temp_min, weather, speed, coord)
            })
    }
}
