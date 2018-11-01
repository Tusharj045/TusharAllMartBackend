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
    contact: {
        type: Array,
        required: true
    }
})

module.exports = { Seller }