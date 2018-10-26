let mongoose = require('mongoose')

let Seller = mongoose.model('Seller', {
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
    },
    reviews:{
        type:String,
    },
    contact: {
        type: Array,
        required: true
    }
})

module.exports = { Seller }