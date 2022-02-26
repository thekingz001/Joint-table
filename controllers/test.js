const Thai_provinces = require('../models').Thai_provinces;
const Thai_geographies = require('../models').Thai_geographies;

module.exports = {
    list(req, res) {
        return Thai_provinces
          .findAll()
          .then((test) => {
              res.status(200).send(users)
              //console.log(test);
            })
          .catch((error) => { res.status(400).send(error); });
      },
};
