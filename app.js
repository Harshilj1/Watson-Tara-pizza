const express = require("express")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080
const app = express()
const orderMiddleware = require('./routes/post')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
app.listen(port, () => {
    console.log(`Listening on Port ${port}`)
})

mongoose.connect("mongodb+srv://harshil:harshil121@cluster0-cbwck.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true }, () => {
    console.log("Connect to MongoDB")
})
app.use('/data',orderMiddleware)
app.get('/', (req, res) => {
  res.send('Welcome')
})

