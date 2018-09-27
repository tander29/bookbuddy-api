const express = require("express");
const Sequelize = require("sequelize");
const { User, books, message } = require("../Models");

const router = express.Router();

router.post('/', (req,res) => {
    const {text} = req.body;
    message.create(
        {text}
    ).then(addMessage => res.json({addMessage}))
})