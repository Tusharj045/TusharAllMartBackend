let mongoose = require('mongoose')

let User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    username: {
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = { User }