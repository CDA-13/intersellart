const express = require('express');
const app = express();
const port = 3001
const cors = require('cors');
const path = require('path');
const db = require('database');
const userRoute = require('./Routes/userRoute');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRoute);

app.listen(port, () => console.log(`connexion successfully`));