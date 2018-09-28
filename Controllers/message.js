const express = require("express");
const Sequelize = require("sequelize");
const { User, books, message } = require("../Models");

const router = express.Router();

router.post('/', (req, res) => {

    const { text, fromuserid, touserid} = req.body
    console.log("is this line 10?", text, req.body, req)
    message.create({
        text,
        fromuserid,
        touserid
    }
    ).then(messages => {
        console.log(messages)
        return res.json({
            text: messages.text,
            fromuserid: message.fromuserid,
            touserid: message.touserid
        })
    })
})

router.get('/', (req, res) => {
    message.findAll({
        limit: req.query.limit || 10,
        offset: req.query.offset || 0,
        order: [["createdAt", "DESC"]]
    }).then(messages => res.json(console.log(messages)));
})


module.exports = router;