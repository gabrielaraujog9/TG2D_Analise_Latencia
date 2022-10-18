const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('./src/routes/index');
const personRoute = require('./src/routes/personRouter');
app.use('/', index);
app.use('/persons', personRoute);
module.exports = app;