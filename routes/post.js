const Order = require('../models/order')
const time = new Date().getTime().toString()
const orderid = require('order-id')(time)
const id = orderid.generate()
console.log(id)
app.post('/', (req, res) => {
    const post = new Order({
        order_id : id,
        name : req.body.name,
        mobile : req.body.mobile,
        city : req.body.city,
        pin : req.body.pin,
        address : req.body.address,
        crust_size : req.body.crust_size.split(':')[0],
        crust_type : req.body.crust_size.split(':')[0],
        pizza_name : req.body.pizza_name,
        status : "Your Order is being prepared"
    })
    console.log(post)
    res.send("Hi")
});