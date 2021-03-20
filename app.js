const express = require("express");

const app = express();


app.get('/', (req, res, next)=> {
    res.send("<h1>Hey there</h1>")
})


app.listen(80);
