const express = require("express")

const Sequelize = require("sequelize")

const router = express.Router();
const { User } = require("../Models")

router.post("/register", (req, res) => {
    console.log("please work")
    res.json({username: 'kyle', displayName: 'Please', password: 'kyle'})
    })
      

  module.exports= {
      router
  }