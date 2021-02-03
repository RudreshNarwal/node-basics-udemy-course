// In this callback we don't have access to the complete response body.
// Instead we can go ahead and grab the individual chunks that come through because http data could be
// streamed in multiple parts.
// It means we have to listen for these individual chunks to come in and we also have to listen for when
// all chunks have arrived and the request is done right here.



const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=2f830d42ca413ade7b9ed11112cfb47a&query=42.3605,-71.0596&units=f'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end() // to send the request
















