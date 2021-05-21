const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

//   Without middleware: new request -> run route handler

//   With middleware: new request -> Do something -> run route handler

// An example of middleware 
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next() // pass this request to route handler as we are done with middleware funstional change
//     }
// })

// An example of middleware function which can be used when our site is in maintainance mode
app.use((req, res, next) => {
    res.status(503).send('Site is currently down. Check back soon!')
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const jwt = require('jsonwebtoken')
const { request } = require('express')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
    console.log(token)

    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)
}

myFunction()