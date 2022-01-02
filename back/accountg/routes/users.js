var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let feriel={name:'Feriel',gender:'Femme'}
  res.json(feriel);
});

module.exports = router;
