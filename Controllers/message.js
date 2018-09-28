const express = require("express");
const Sequelize = require("sequelize");
const { User, books, message } = require("../Models");

const router = express.Router();

router.post('/', (req,res) => {
    const {text, userId} = req.body
    message.create({
        text,
        userId 
        }      
    ).then(messages => res.json(
        {
            text: messages.text,
            userId: messages.userId
        }))
        console.log(messages)
})

router.get('/', (req,res) => {
    message.findAll({
        limit: req.query.limit || 10,
        offset: req.query.offset || 0,
        order: [["createdAt", "DESC"]]
      }).then(messages => res.json(console.log(messages)));
})


module.exports = router;