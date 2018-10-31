let mongoose = require('mongoose')

let Product = mongoose.model('Product', {
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required:true
    },
    reviews: {
        type: String,
        default:'none'
    },
    seller:{
        type:String
    }
})

module.exports = { Product }