const db = require('./db')
const bcrypt = require('bcrypt')

// get all users
const getUsers = async (req, res) => {
    console.log('get all users')
}

// get single user
const getUser = async (req, res) => {
    console.log('get single user')
}

// post new user
const postUser = async (req, res) => {
    // get user info from frontend
    let { username, email, password, password2 } = req.body


    // validation

    // check if username is empty
    if (username.length == 0) {
        res.status(400).json({mssg: 'please enter a username'})
        return
    }

    // check if email is empty
    if (email.length == 0) {
        res.status(400).json({mssg: 'please enter an email'})
        return
    }
    
    // check if passwords match
    if (password != password2) {
        // not matching
        res.status(400).json({mssg: 'passwords don\'t match'})
        return
    }
    // check for valid password length
    if (password.length < 8) {
        // too short
        res.status(400).json({mssg: 'password is too short, password must be at least 8 characters'})
        return
    }


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
                res.status(400).json({mssg: 'this email already has an account'})
                return
            }
        }
    })

    
    // all is well so add user to db
    db.pool.query(`INSERT INTO "user" (username, email, password) 
    VALUES ($1, $2, $3) RETURNING id, password`, [username, email, hashedPassword], 
    (err, results) => {
        if (err) {
            throw err
        }
        else {
            // signup successful, redirect to login
            res.status(200).json({})
        }
    })
}


// login user
const loginUser = async (req, res) => {
    // get user info from frontend
    let { email, password } = req.body

    // get the email from the database
    db.pool.query( `SELECT * FROM "user" WHERE email = $1`, [email],
    (err, results) => {
        if (err) {
            throw err
        }
        else {
            // check if a user was found
            if (results.rows.length == 0) {
                // no user found return error mssg
                res.status(400).json({mssg: 'no user found with this email'})
            }
            else {
                // check if the password is correct
                const user = results.rows[0]

                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) {
                        throw err
                    }
                    else {
                        if (isMatch) {
                            // passwords match so login the user
                            res.status(200).json(user)
                        }
                        else {
                            // incorrect password
                            res.status(400).json({mssg: 'password is incorrect for this email'})
                        }
                    }
                })
            }
        }
    })
}


// delete user
const deleteUser = async (req, res) => {
    console.log('delete user')
}

// update user
const updateUser = async (req, res) => {
    console.log('update user')
}


// export functions

module.exports = {
    getUsers,
    getUser,
    postUser,
    loginUser,
    deleteUser,
    updateUser
}