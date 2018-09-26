const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize')


const {books} = require('../Models');

router.post('/', (req, res) => {    
            res.send({stuff: "please fucking work"
            })
})

module.exports = {
    router
}