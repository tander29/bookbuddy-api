const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize')

//cpmstatadsfgasgfa

const {books} = require('../Models');

router.post('/', (req, res) => {
    const {title, author, isbn10, isbn13, image, rating} = req.body;
    books.create({
           title,
           author,
           isbn10,
           isbn13,
           image,
           rating,
    })
        .then(book =>
            res.json({
                title: book.title,
                author: book.author,
                isbn10: book.isbn10,
                isbn13: book.isbn13,
                rating: book.rating,

            }))
            console.log({title})
})

module.exports = router;
