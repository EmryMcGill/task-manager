const express = require('express')
const {
    getUsers,
    getUser,
    postUser,
    deleteUser,
    updateUser
} = require('../userController')


// create a router 
const router = express.Router()

// GET all todos
router.get('/', getUsers)

// GET single todo
router.get('/:id', getUser)

// POST a new todo
router.post('/', postUser)

// DELETE a todo
router.delete('/:id', deleteUser)

// UPDATE a todo
router.patch('/:id', updateUser)

// export the router so the app can you it 
module.exports = router