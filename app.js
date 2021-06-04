const express = require("express");

const app = express();
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "dbName",
  max: 10,
  connectionTimeoutMillis: 0 //if pools are taken wait forever
//   idleTimeoutMillis: 0 //if connection not used still hold it forever
});

app.get('/', (req, res, next)=> {
    res.send("<h1>Hey there code deploy</h1>")
})

app.get('/status', (req, res, next)=> {
    res.send("<h1>healthy guy</h1>")
})

// app.get('/db', async(req, res, next) => {
//     const data = await pool.query(`SELECT * FROM buyer`)

//     res.json({message: "success", data: data.rows[0]});
// })


app.listen(80);
