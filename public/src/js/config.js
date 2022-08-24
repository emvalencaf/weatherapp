import { createFetch } from "./createFetch.js"

export const baseurl = "https://api.openweathermap.org/data/2.5/"

const regex = /en/i

export const options = {
    appid: "",
    lang: navigator.language,
    units: regex.test(navigator.language)? "imperial": "metric"
 }
