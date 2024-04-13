const Cat = require('./catagoriesModel')
const mongoose = require('mongoose')


// get all todos
const getCatagories = async (req, res) => {
    // find all cats from db
    const cats = await Cat.find({}).sort({createdAt: 1})
    // send them as json in the response
    res.status(200).json(cats)
}

// get single todo
const getCatagorie = async (req, res) => {
    // get the id from the request params
    const { id } = req.params

    // validate id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "no such cat"})
    }

    // find the target in the db
    const cat = await Cat.findById(id)

    // if not found respond with error
    if (!cat) {
        return res.status(404).json({error: 'cat not found'})
    } 
    // send it as json in the response
    res.status(200).json(cat)
}

// post new todo
const postCatagorie = async (req, res) => {
    // get the title from the request
    const title = req.body.title
    // try to create a new cat doc using the cat model
    try {
        const cat = await Cat.create({title})
        res.status(200).json(cat)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete cat
const deleteCatagorie = async (req, res) => {
    // get id from request parameters
    const { id } = req.params

    console.log("deleting api");

    //validate id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "cat not found"})
    }

    // find doc to delete
    const cat = await Cat.findOneAndDelete({ _id: id })

    if (!cat) {
        // todo not found so return error response
        return res.status(404).json({error: "cat not found"})
    }

    // return deleted todo
    res.status(200).json(cat)
}

// update todo
const updateCatagorie = async (req, res) => {
    // get id from request parameters
    const { id } = req.params

    //validate id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "todo not found"})
    }

    // find doc to update
    const cat = await Cat.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!cat) {
        // todo not found so return error response
        return res.status(404).json({error: "todo not found"})
    }

    // return updated todo
    res.status(200).json(cat)
}


// export functions

module.exports = {
    getCatagories,
    getCatagorie,
    postCatagorie,
    deleteCatagorie,
    updateCatagorie
}