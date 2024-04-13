const express = require('express')
const {
    getCatagories,
    getCatagorie,
    postCatagorie,
    deleteCatagorie,
    updateCatagorie
} = require('../catagoriesController')


// create a router 
const router = express.Router()

// GET all catagories
router.get('/', getCatagories)

// GET single catagorie
router.get('/:id', getCatagorie)

// POST a new catagorie
router.post('/', postCatagorie)

// DELETE a catagorie
router.delete('/:id', deleteCatagorie)

// UPDATE a catagorie
router.patch('/:id', updateCatagorie)

// export the router so the app can you it 
module.exports = router