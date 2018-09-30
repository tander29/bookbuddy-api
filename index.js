require("dotenv-safe").config({ allowEmptyValues: true });
const express = require("express");
const morgan = require("morgan");
const { Client } = require("pg");
const cors = require("cors");
const controllers = require("./Controllers");
const app = express();

app.set("port", process.env.PORT || 8000);

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Heroku Server is runningx");
});

app.use("/authorize", controllers.authorize);
app.use("/books", controllers.books);
app.use("/message", controllers.message);
app.use("/User", controllers.user);

app.listen(app.get("port"), () => {
  console.log(`app listening on port ${app.get("port")}`);
});
