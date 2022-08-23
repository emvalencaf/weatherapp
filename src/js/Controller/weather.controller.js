export class WeatherController{
    constructor(view, service){
        this.view = view
        this.service = service
    }

    async getWeatherByCityName(cityName){
        try{

            await this.service.getWeatherByCityName(cityName)
            this.view.render(this.service.weatherData)

        } catch(e){

            console.log(e)
            this.view.renderError()

        }
    }

    renderErrorOut(){
        this.view.renderErrorOut()
    }
}