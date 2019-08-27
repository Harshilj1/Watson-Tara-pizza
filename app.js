const express = require("express")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080
const Order = require('./models/order')
const app = express()
const time = new Date().getTime().toString()
const orderid = require('order-id')(time)
const id = orderid.generate()
console.log(id)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
app.listen(port, () => {
    console.log(`Listening on Port ${port}`)
})

mongoose.connect("mongodb+srv://harshil:harshil121@cluster0-cbwck.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true }, () => {
    console.log("Connect to MongoDB")
})

app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

app.post('/data', (req, res) => {
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

