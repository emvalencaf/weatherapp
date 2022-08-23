export class WeatherController{
    constructor(view, service){
        this.view = view
        this.service = service
    }

    async getWeatherByCityName(cityName){
        await this.service.getWeatherByCityName(cityName)
        this.view.render(this.service.weatherData)
    }
}