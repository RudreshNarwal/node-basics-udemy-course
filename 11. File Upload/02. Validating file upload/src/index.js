const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000


// Also check user router for the changes

const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000  // max size 1 mb
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a Word document'))  // for throwing new error
        }

        cb(undefined, true)  // cb -> undifined, status (true) -> will send success reponse while false will send 404
     }
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
})



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})