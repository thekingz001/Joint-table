var express = require('express');
var router = express.Router();
const Thai_provinces = require('../models').Thai_provinces;
const Thai_geographies = require('../models').Thai_geographies;

/* GET users listing. */
router.get('/', function(req, res, next) {
  Thai_geographies
  .findAll({
    include: [{
      model: Thai_provinces,
      as: 'provinces'
    }],
  })
  .then((test) => {
      //console.log(JSON.stringify(test));
      const data = JSON.stringify(test);
      //res.send(test);
      res.status(200).render('welcome', {data: test,
      title: "Test _ Joint" })
    })
  .catch((error) => { res.status(400).send(error); });
  //res.send('respond with a resource');
});

module.exports = router;
