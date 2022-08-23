import { WeatherService } from "./Service/weather.service.js"
import { WeatherView } from "./View/weather.view.js"
import { WeatherController } from "./Controller/weather.controller.js"

//DOM elements

const weatherapp = document.querySelector(".weather-app")
const container = document.querySelector("#weather-details")
const form = document.querySelector("form")



//instance classes
const weatherService = new WeatherService()
const weatherView = new WeatherView(container)
const weatherController = new WeatherController(weatherView, weatherService)

//evt listeners

form.querySelector(".input").addEventListener("focus",() =>{
    weatherController.renderErrorOut()
})

//search weather by an city name
form.addEventListener("submit", (evt) => {
    evt.preventDefault()
    const cityName = document.querySelector("input").value
    
    weatherController.getWeatherByCityName(cityName)
})
