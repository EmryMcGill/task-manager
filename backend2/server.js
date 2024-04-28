const express = require('express')
const cors = require('cors')
require('dotenv').config();
const db = require('./db')
const todoRoutes = require('./routes/todos')
const catagoriesRoutes = require('./routes/catagories')
const userRoutes = require('./routes/user')

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
app.use('/api/catagorie', catagoriesRoutes)
app.use('/api/user', userRoutes)


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});