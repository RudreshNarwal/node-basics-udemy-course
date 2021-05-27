const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {   // adding user id of the current user
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'  // creating a reference on the current user. 'User' here is user model name
    }
})

module.exports = Task