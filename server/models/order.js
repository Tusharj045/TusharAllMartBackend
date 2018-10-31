let mongoose = require('mongoose')

let Order = mongoose.model('Order', {
    cust_name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    ship_address: {
        type: String
    },
    products:{
        type:Array
    }
})

module.exports = { Order }