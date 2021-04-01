const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
}, function(err, result) {
    if(err) {
        console.log(err);
    } else {
        console.log(result);
    }
})