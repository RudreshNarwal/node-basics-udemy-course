//mongoose-> elegant mongodb object modeling for node.js
const mongoose = require('mongoose')

// mongoose use mongo db interaction behind the scene
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true // create unique index value
})

const User = mongoose.model('User', {  // User with uppercase U -> normal mongodb convention
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

//creating instance of mongoose model
const me = new User({
    name: 'Andrew',
    age: 'Mike'
})   

//saving instance value on DB
me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
})