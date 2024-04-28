const db = require('./db')

// get all todos
const getCatagories = async (req, res) => {
    console.log('get all catagories')
}

// get single todo
const getCatagorie = async (req, res) => {
    console.log('get single catagorie')
}

// post new todo
const postCatagorie = async (req, res) => {
    console.log('post new catagorie')
}

// delete cat
const deleteCatagorie = async (req, res) => {
    console.log('delete catagorie')
}

// update todo
const updateCatagorie = async (req, res) => {
    console.log('update catagorie')
}


// export functions

module.exports = {
    getCatagories,
    getCatagorie,
    postCatagorie,
    deleteCatagorie,
    updateCatagorie
}