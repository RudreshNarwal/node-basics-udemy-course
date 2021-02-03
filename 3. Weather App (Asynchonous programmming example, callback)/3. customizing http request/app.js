const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=2f830d42ca413ade7b9ed11112cfb47a&query=42.3605,-71.0596&units=f'


// json: true  -> will automatically parse our response string to JSON
// request({ url: url, json: true }, (error, response) => {
//     console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
// })


//

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicnVkcmVzaDEyMyIsImEiOiJja2tmMmRsNjkwcmR3MnBxdXB3djlibnR2In0.KgKUya0djTdhE6kmJXh8xQ&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(latitude, longitude)
})