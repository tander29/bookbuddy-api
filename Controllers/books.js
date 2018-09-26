const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize')

//cpmstatadsfgasgfa

const {books} = require('../Models');

router.post('/', (req, res) => {
    const {title, author} = req.body;
    books.create(
           title,
           author
        )
        .then(book =>
            res.json({
                book:book
            }))
            .then(res.send(book))
            console.log({title})
})

module.exports = router;
