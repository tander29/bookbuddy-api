const express = require("express")

const Sequelize = require("sequelize")

const router = express.Router();
const { User } = require("../Models")



router.post("/register", (req, res) => {
    const { username, displayName, password } = req.body;
    User.create({
      username,
      displayName,
      password
    })
      .then(user =>
        res.json({
          username: user.get("username"),
          displayName: user.get("displayName"),
          password: user.get("password")
        })
      )
  });

router.post("/login", (req, res) => {
    console.log("please work")
    //const { username, password } = req.body
    res.json({username: 'kyle', password: 'kyle'})
    })
      

  module.exports= {
      router
  }