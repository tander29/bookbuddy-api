const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize')


const {
    books
} = require('../Models');

router.post('/', (req, res) => {
    books.create(
            Object.assign({}, req.body, {
                userId: req.user.get("id")
            })
        )
        .then(book =>
            res.json({
                book: book
            }))
})

module.exports = {
    router
}