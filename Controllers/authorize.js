const express = require("express")

const Sequelize = require("sequelize")

const router = express.Router();
const { User } = require("../Models")



router.post("/login", (req, res) => {
    console.log("please work")
    //const { username, password } = req.body
    res.json({username: 'kyle', password: 'kyle'})
    })
      

  module.exports= {
      router
  }