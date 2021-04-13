const request = require('request')  //postman-request(alternative)

const url = 'http://api.weatherstack.com/current?access_key=2f830d42ca413ade7b9ed11112cfb47a&query=42.3605,-71.0596'

request({ url: url, data: '' }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current);
})   // this function will run
// if we have weather data, or there is something wrong in data request
