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
    const {username, password, displayname} =req.body;
      User.scope(null)
        .find({where: {username}})
        .then(User => {
          if(User.password === User.get("password")){
            const payload ={id: User.get('id'),}

            res.json({id: payload.id, username, displayname, success:true})
          }else{
            res.json({success:false})
          }
        })

    })

  router.post("/logout", (req,res) =>{
    req.getlogout();
    res.json({success:true, message:'logged out',})
  })
      

  module.exports= {
      router
  }