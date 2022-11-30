const express = require('express');
const app = express();
//Rotas
const index = require('./src/routes/index');
const dataRouter = require('./src/routes/dataRouter');
//app.
app.set("view options", {layout: false});
app.use(express.static(__dirname + '/public'));

app.use('/', index);
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
app.use('/data', dataRouter);
module.exports = app;