const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize')

//cpmstatadsfgasgfa

const {books} = require('../Models');

router.post('/', (req, res) => {
    const {title, author, isbn10, isbn13, image} = req.body;
    books.create(
        Object.assign({}, req.body, {
            userId: req.user.get("id")
          }),{
      
           title,
           author,
           isbn10,
           isbn13,
           image,
    })
        .then(book =>
            res.json({
                title: book.title,
                author: book.author,
                isbn10: book.isbn10,
                isbn13: book.isbn13,
                image: book.image

            }))
         console.log(req.body)
})

module.exports = router;
