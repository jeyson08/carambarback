const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors());

const blague = require("./data");

//TESTS
// app.get('/', (req, res) => {
//     res.status(200).json({"message": "Accueil"});
// });

// app.get('/blagues', (req, res) => {
//     res.status(200).json(blague);
// });

app.listen(port, () => {
    console.log("Server is runningggg on port " + port);
});

app.use('/api/v1', require('./routes/v1'))