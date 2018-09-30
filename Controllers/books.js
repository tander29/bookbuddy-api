const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');

const { books, User } = require('../Models');

router.post('/', (req, res) => {
    const { title, author, isbn10, isbn13, image, userId, rating } = req.body;
    books.create({
        title,
        author,
        isbn10,
        isbn13,
        image,
        userId,
        rating
    })
        .then(book =>
            res.json({
                title: book.title,
                author: book.author,
                isbn10: book.isbn10,
                isbn13: book.isbn13,
                image: book.image,
                rating: book.rating
            }))

})
router.get("/", (req, res) => {
    books.findAll({
        limit: req.query.limit || 10,
        offset: req.query.offset || 0,
        order: [["createdAt", "DESC"]]
    }).then(book => res.json({ book }));
});

module.exports = router;
