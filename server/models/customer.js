let mongoose=require('mongoose')

let Customer=mongoose.model('Customer',{
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zip_code: {
        type: Number,
        required: true
    },
    contact: {
        type: Array,
        required: true
    }
})

module.exports={Customer}