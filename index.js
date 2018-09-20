require("dotenv-safe").config({ allowEmptyValues: true });
const express = require('express')
const morgan = require("morgan");
const cors = require("cors");
const { Client } = require('pg');
const { User, sequelize } = require("./models");


const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

const client = new Client({
  connectionString: process.env.DATABASE_URL || 3000,
  ssl: true,
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(3000, () => {
    console.log('app listening on port 3000!')
});
client.connect();