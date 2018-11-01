let mongoose = require('mongoose')

let Feedback = mongoose.model('Feedback', {
    product_name: {
        type: String,
        required: true
    },
    review:{
        type:String
    },
    rating:{
        type:Number
    }
})

module.exports = { Feedback }