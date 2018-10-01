const express = require("express");
const Sequelize = require("sequelize");
const { User, books } = require("../Models");

const router = express.Router();

router.get("/:id", (req, res) => {
    const id = req.params.id;
    User.findById(id)
    .then(user => res.json({ user }));
  });

  router.get("/", (req, res) => {
    User.findAll({
      limit: req.query.limit || 10,
      offset: req.query.offset || 0,
      order: [["createdAt", "DESC"]]
    }).then(users => {
      res.json({ users });
    });
  });

router.patch("/", (req,res) => {
  const patch = {};
  const update = req.body;

  if(update.username !== undefined){
    patch.username = update.username
  }

  if(update.password !== undefined){
    patch.password = update.password
  }

  if(update.about !== undefined){
    patch.about = update.about
  }

  User.update(patch, {
    where: {
      id: req.user.id
    }
  })
    .then(_ => User.findOne({ where: { id: req.user.id } }))
})

router.delete("/", (req, res) => {
  User.destroy({
    where: {
      id: req.user.id
    }
  })
    .then(() => res.json({ id: req.user.id }))
})

module.exports = router;