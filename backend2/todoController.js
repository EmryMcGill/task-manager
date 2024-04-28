const db = require('./db')

// get all todos
const getTodos = async (req, res) => {
    console.log('get all todos')
}

// get single todo
const getTodo = async (req, res) => {
    console.log('get single todo')
}

// post new todo
const postTodo = async (req, res) => {
    console.log('post new todo')
}

// delete todo
const deleteTodo = async (req, res) => {
    console.log('delete todo')
}

// update todo
const updateTodo = async (req, res) => {
    console.log('update todo')
}


// export functions

module.exports = {
    getTodos,
    getTodo,
    postTodo,
    deleteTodo,
    updateTodo
}