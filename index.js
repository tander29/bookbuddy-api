require("dotenv-safe").config({ allowEmptyValues: true });
const express = require('express')
const morgan = require("morgan");
const { Client } = require('pg');
const cors = require('corgit pus')
const controllers = require("./Controllers")
const app = express();

app.set("port", process.env.PORT || 8000);

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors())


app.get('/', (req, res) => {
    res.send('hello world')
});

app.use("/authorize", controllers.authorize);
app.use("/books", controllers.books)


app.listen(app.get("port"), () => {
    console.log('app listening on port 8000!')
});
