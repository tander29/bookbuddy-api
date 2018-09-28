const express = require("express");
const Sequelize = require("sequelize");
const { User, books, message } = require("../Models");

const router = express.Router();

router.post('/', (req, res) => {

    const { text, userId } = req.body
    console.log("is this line 10?", text, req.body, req)
    message.create({
        text,
    }
    ).then(messages => {
        console.log(messages)
        return res.json({
            text: messages.text,
            userId: messages.userId
        })
    })
})

router.get('/', (req, res) => {
    message.findAll({
        limit: req.query.limit || 100,
        offset: req.query.offset || 0,
        order: [["createdAt", "DESC"]]
    }).then(messages => res.json({ messages: messages }));
})


module.exports = router;