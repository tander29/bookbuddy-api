const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize')
const { User, books } = require("../Models");


router.post('/', (req, res) => {
    const {title, author, isbn10, isbn13, image, userId} = req.body;
    books.create(
       {
           title,
           author,
           isbn10,
           isbn13,
           image,
           userId
    })
        .then(book =>
            res.json({
                title: book.title,
                author: book.author,
                isbn10: book.isbn10,
                isbn13: book.isbn13,
                image: book.image,
                userId: book.userId

            }))
         console.log()
})

module.exports = router;
