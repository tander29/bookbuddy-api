const express = require("express");
const Sequelize = require("sequelize");
const { User } = require("../Models");

const router = express.Router();

router.get("/:id", (req, res) => {
    const id = req.params.id;
    User.findById(id, {
      include: [
        {
          model: books,
        }
      ]
    }).then(user => res.json({ user }));
  });



module.exports = router;