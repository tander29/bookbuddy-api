const express = require("express");
const Sequelize = require("sequelize");
const { User, books, message } = require("../Models");

const router = express.Router();

router.post('/', (req,res) => {
    const {messages} = req.body
    message.create({
        messages
        }      
    ).then(Message => res.json({Message: messages}))
})

router.get('/', (req,res) => {
    message.findAll({
        limit: req.query.limit || 10,
        offset: req.query.offset || 0,
        order: [["createdAt", "DESC"]]
      }).then(messages => res.json({messages}));
})


module.exports = router;