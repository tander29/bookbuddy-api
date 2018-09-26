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
                title: book.get('title'),
                author: book.get('author')
            }))
            .then(res.send(book))
            console.log({title})
})

module.exports = router;
