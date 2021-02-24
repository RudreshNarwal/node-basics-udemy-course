/// Goal-  Create an express web server
// 1. Initialize npm and install express
// 2. Setup a new express server
//    - Serve up the public directory
//    - Listen n port 3000
// 3. Create index.html and render chat app to the screen
// 4. Start the server and view page on browser

const path = require('path')
const express = require('express')

const app = express()

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})