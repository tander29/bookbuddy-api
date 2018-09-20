require("dotenv-safe").config({ allowEmptyValues: true });
const express = require('express')
const { User, sequelize } = require("./models");


const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});