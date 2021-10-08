const express = require("express")

const Sequelize = require("sequelize")

const router = express.Router();
const { User } = require("../Models")



router.post("/register", (req, res) => {
    const { username, displayname, password } = req.body;
    console.log(req.body);
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
        ) .catch(error => {
            if (error instanceof Sequelize.ValidationError) {
              return res.status(400).send({ errors: error.errors });
            }
            console.error(error);
            res.status(500).send();
          });
});

router.post("/login", (req, res) => {
    const { username, password, displayname } = req.body;
    User.scope(null)
        .findOne({ where: { username } })
        .then(User => {
            if (password === User.get("password")) {
                const payload = { id: User.get('id'), }
                console.log(password)
                res.json({ id: payload.id, username, displayname, password, success: true })
            } else {
                res.json({ success: false })
            }
        })

})

router.post("/logout", (req, res) => {
    req.getlogout();
    res.json({ success: true, message: 'logged out', })
})


module.exports = {
    router
}