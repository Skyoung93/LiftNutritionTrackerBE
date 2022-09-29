require("dotenv").config();
const path = require("path");
const controllers = require('./controllers.js');
const express = require("express");
const app = express();
const cors = require('cors');
const morgan = require('morgan');

// Establishes connection to the database on server start
const db = require("./db");

// Middleware Here
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
// app.use(express.static(__dirname + '/public'));

// Routes Here
app.get('/foods/names', controllers.getFoodsNames);
app.get('/foods/date/:date', controllers.getFoodsDate);
app.put('/foods', controllers.putFoods);
app.post('/foods', controllers.postFoods);
app.delete('/foods/:id', controllers.deleteFoods);

app.get('/lifts/names', controllers.getLiftsNames);
app.get('/lifts/date/:date', controllers.getLiftsDate);
app.put('/lifts', controllers.putLifts);
app.post('/lifts', controllers.postLifts);
app.delete('/lifts/:id', controllers.deleteLifts);



app.listen(process.env.SERVER_PORT);
console.log(`Listening at http://localhost:${process.env.SERVER_PORT}`);