const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize')

//cpmstatadsfgasgfa

const {books} = require('../Models');

router.post('/', (req, res) => {
    const {title, author, isbn10, isbn13, image,userId} = req.body;
    books.create({
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
        
})
router.get("/", (req, res) => {
    books.findAll({
      limit: req.query.limit || 6,
      offset: req.query.offset || 0,
      order: [["createdAt", "DESC"]]
    }).then(Books => res.json({ ...Books }));
  });

module.exports = router;
