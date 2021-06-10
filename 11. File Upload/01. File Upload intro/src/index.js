const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// Added file upload   
// Better approch -> Use Base64 encoding
const multer = require('multer')
const upload = multer({
    dest: 'images'  // setting destination folder where images will be stored
})
app.post('/upload', upload.single('upload'), (req, res) => {   // upload.single('upload') -> is multer middlware which willl enable only single upload -> with upload as a key
    res.send()
})



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})