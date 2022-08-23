export class WeatherModel{
    constructor(name, country, humidity, temp, temp_max, temp_min, weather, speed, coord){
        this.name = name
        this.country = country,
        this.humidity = humidity,
        this.temp = temp,
        this.temp_max = temp_max,
        this.temp_min = temp_min,
        this.weather = weather,
        this.speed = speed
        this.coord = coord
        this.date = new Date()
    }
}