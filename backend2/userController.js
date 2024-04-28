const db = require('./db')
const bcrypt = require('bcrypt')

// get all todos
const getUsers = async (req, res) => {
    console.log('get all todos')
}

// get single todo
const getUser = async (req, res) => {
    console.log('get single todo')
}

// post new todo
const postUser = async (req, res) => {
    // get user info from frontend
    let { username, email, password } = req.body

    // validation


    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // check if user already exists
    db.pool.query(`SELECT * FROM "user" 
    WHERE email = $1`, [email], 
    (err, results) => {
        if (err) {
            throw err
        }
        else {
            if (results.rows.length > 0) {
                // email exists in db
                console.log('error')
                res.status(400).json({err: 'this email already has an account'})
            }
            else {
                // new email so add user to db
                db.pool.query(`INSERT INTO "user" (username, email, password) 
                VALUES ($1, $2, $3)`, [username, email, hashedPassword])
            }
        }
    })
}

// delete todo
const deleteUser = async (req, res) => {
    console.log('delete todo')
}

// update todo
const updateUser = async (req, res) => {
    console.log('update todo')
}


// export functions

module.exports = {
    getUsers,
    getUser,
    postUser,
    deleteUser,
    updateUser
}