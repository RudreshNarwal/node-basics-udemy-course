const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

//   Goal: Send a welcome msg to new user and allow client to send messages
//   
//  1. Have server emit "message" when new client connects
//      - Send "Welcome!" as the event data
//  2. Client listen for "message" event and print the message to console
//  3. Create a form with an input and button 
//  4. Setup event listener for form submissions
//      - Emit "sendMessage" with input string as message data
//  5. Have server listen to "sendMessage"
//      - Send message to all connected clients  


io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    socket.emit('message', 'Welcome!')

    socket.on('sendMessage', (message) => {
        io.emit('message', message)
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})