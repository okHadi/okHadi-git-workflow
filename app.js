const express = require('express');

const app = express();
const port = 4301;

app.listen(port, () => { console.log("Node Server Started at PORT: " + port); });

app.get('/', (req, res) => {
    res.send("hello world")
})

module.exports = app;