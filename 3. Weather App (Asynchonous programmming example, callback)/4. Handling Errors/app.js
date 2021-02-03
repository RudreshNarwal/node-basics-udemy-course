const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=2f830d42ca413ade7b9ed11112cfb47a&query=42.3605,-71.0596&units=f'

request({ url: url, json: true }, (error, response) => {
    // lower level error handling
    if (error) {
        console.log('Unable to connect to weather service!')
        console.log(error)
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
    }
})