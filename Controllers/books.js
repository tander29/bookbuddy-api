const express = require('express');
const router = express.Router();

const {books} = require('../Models');

router.post('/', (req, res) =>{
    const {title, author, isbn10, isbn13}

    books.create(
        Object.assign({}, req.body, {
            userId: req.user.get("id")
        }),
        title,
        author,
        isbn10,
        isbn13
    )
    })
        .then(book => 
            res.json({
                title: book.get('title'),
                author: book.get('author'),
                isbn10: user.get('isbn10'),
                isbn13: user.get('isbn13')
            }))


module.exports={
    router
}

