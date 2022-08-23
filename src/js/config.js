export const baseurl = "https://api.openweathermap.org/data/2.5/"

const regex = /en/i

export const options = {
    appid:"b2702e4b512cbe19fee9deb80b88fe24",
    lang: navigator.language,
    units: regex.test(navigator.language)? "imperial": "metric"
 }

 