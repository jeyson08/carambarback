const express = require("express");
const app = express();
const port = 3000;

const blague = require("./data");

app.get('/', (req, res) => {
    res.status(200).json({"message": "Accueil"});
});

app.get('/blagues', (req, res) => {
    res.status(200).json(blague);
});

app.listen(port, () => {
    console.log("Server is runningggg on port " + port);
});