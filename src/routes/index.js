const express = require('express');
const router = express.Router();
const path = require('path');

/*router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + "../../"))
})*/
router.get('/', function(req, res) {
    res.render('index.html');
});

/*router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});*/
module.exports = router;