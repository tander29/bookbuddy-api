const express = require("express");
const Sequelize = require("sequelize");
const { User, books, Message } = require("../Models");

const router = express.Router();

router.post('/', (req,res) => {
    const {text} = req.body
    Message.create({
        text
        }      
    ).then(message => res.json({text: message.text}))
})

router.get('/', (req,res) => {
    Message.findAll({
        limit: req.query.limit || 10,
        offset: req.query.offset || 0,
        order: [["createdAt", "DESC"]]
      }).then(messages => res.json({messages}));
})


module.exports = router;