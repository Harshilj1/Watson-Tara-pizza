const mongoose = require('mongoose')
let pizza = new mongoose.Schema({
    order_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pin: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    crust_size: {
        type: String,
        required: true
    },
    crust_type: {
        type: String,
        required: true
    },
    pizza_name: {
        type: String,
        required: true
    },
    status : {
        type : String,
        required:true
    }
})

module.exports = mongoose.model("PizzaOrder",pizza)
