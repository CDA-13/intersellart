const express = require('express');
const app = express();
const port = 3001
const cors = require('cors');
const path = require('path');
const db = require('./database');
const userRoute = require('./Routes/userRoute');
const publication = require("./Controllers/publication.js");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRoute);

app.use("/api/publication", publication);

app.all("*", function (req, res) {
    res.status(404).json({ error: "Not Found" });
});

app.listen(port, () => console.log(`connexion successfully`));