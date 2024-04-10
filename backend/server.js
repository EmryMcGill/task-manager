require('dotenv').config()

var cors = require('cors');
const express = require('express')
const mongoose = require('mongoose')
const todoRoutes = require('./routes/todos')

// create start the express app, stored in 'app'
const app = express()

// middleware
app.use(cors());

// to get json data from req
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// use the routes from the router
app.use('/api/todo', todoRoutes)



// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
    console.log('listening on port 4000!')
        })
    }).catch((error) => {
        console.log(error)
    })