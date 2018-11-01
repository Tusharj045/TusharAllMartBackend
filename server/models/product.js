let mongoose = require('mongoose')

let Product = mongoose.model('Product', {
    name: {
        type: String,
        required: true
    },
    brand:{
        type:String
    },
    desc:{
        type:String
    },
    price: {
        type: Number,
        required:true
    },
    review: {
        type: String
    },
    rating: {
        type:Number
    },
    seller:{
        type:String
    }
})

module.exports = { Product }