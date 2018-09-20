require("dotenv-safe").config({ allowEmptyValues: true });
const express = require('express')
const morgan = require("morgan");
const { Client } = require('pg');
const cors =require('cors')
const app = express();


app.set("port", process.env.PORT || 5000);

app.use(morgan("tiny"));
app.use(express.json());
app.use('cors')
 app.get('/', (req, res) => {
    res.send({ stuff: 'vfgkj,ecd' })
    console.log('cors')
 });
 


app.listen(app.get("port"), () => {
    console.log('app listening on port 5000!')
});
