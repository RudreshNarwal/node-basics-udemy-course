const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) => {
    res.send([{
        name: 'Andrew'
    }, {
        name: 'Sarah'
    }])
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

// Express 3.x is a light-weight web application framework to help organize your web application into
// an MVC architecture on the server side. You can use a variety of choices for your templating language 
// (like EJS, Jade, and Dust.js).

// You can then use a database like MongoDB with Mongoose (for modeling) to provide a backend for your 
// Node.js application. Express.js basically helps you manage everything, from routes, to handling 
// requests and views.

// Redis is a key/value store -- commonly used for sessions and caching in Node.js applications. 
// You can do a lot more with it, but that's what I'm using it for. I use MongoDB for more complex relationships,
//  like line-item <-> order <-> user relationships. There are modules (most notably connect-redis) 
//  that will work with Express.js. You will need to install the Redis database on your server.