const express = require("express");
const Sequelize = require("sequelize");
const { User, books } = require("../Models");

const router = express.Router();

router.get("/:id", (req, res) => {
  const id = req.params.id;
  User.findById(id, {

    include: [
      {
        model: books
      }
    ]

  }).then(user => res.json({ user }));
});

// router.get("/all", (req, res) => {
//   User.findAll({
//     limit: req.query.limit || 50,
//     offset: req.query.offset || 0,
//     order: [["createdAt", "DESC"]]
//   }).then(user => res.json({ oh: "my" }));
// });



module.exports = router;