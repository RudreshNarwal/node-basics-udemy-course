const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    // sign method is used to create a JSON Web Token
    // first Argument  is the data which will be available in token. Second argument is the secret key which will be used to sign the token.
    const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
    console.log(token)

    //Verifying token with the secret key
    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)
}

myFunction()