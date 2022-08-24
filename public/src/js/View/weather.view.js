import { options } from "../config.js"


export class WeatherView{
    constructor(container){
        this.container = container
    }

    render(weatherData){
        console.log(weatherData)
        this.clearContainer()
        this.container.style.display = "flex"
        const html = `
        <h2>${weatherData.name}, ${weatherData.country}</h2>
        <span id="current-date">${weatherData.date.toLocaleDateString(`${options.lang}`, {weekday:'long', year: 'numeric', month: 'long'})}</span>
        <span id="current-temp">${weatherData.temp.toFixed(0)}${options.units === "imperial"? "f": "c"}º</span>
        <div class="container-desc">
            <img src="https://openweathermap.org/img/wn/${weatherData.weather.icon}@2x.png" alt="weather icon">
            <span id="current-weather">${weatherData.weather.description}</span>
        </div>
        <span>${weatherData.temp_min.toFixed(0)}${options.units === "imperial"? "f": "c"}º / ${weatherData.temp_max.toFixed(0)}${options.units === "imperial"? "f": "c"}º</span>
        <div class="container-details">
            <span>humidity: ${weatherData.humidity}%</span>
            <span>wind speed: ${weatherData.speed} ${options.units === "imperial"? "mph": "km/h"}</span>
        </div>        
        
        `
        this.container.innerHTML = html
    }

    renderError(){
        this.clearContainer()

        const input =document.querySelector("input")
        input.classList.add("error")
        
        input.value = ""
        input.blur()
    }

    renderErrorOut(){

        const input = document.querySelector("input")

        input.classList.remove("error")

    }

    clearContainer(){
        this.container.innerHTML = ""
        this.container.style.display = "none"
    }
}