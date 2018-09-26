const express = require("express")

const Sequelize = require("sequelize")

const router = express.Router();
const { User } = require("../Models")



router.post("/register", (req, res) => {
    const { username, displayname, password } = req.body;
    User.create({
      username,
      displayname,
      password
    })
      .then(user =>
        res.json({
          username: user.get("username"),
          displayname: user.get("displayname"),
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