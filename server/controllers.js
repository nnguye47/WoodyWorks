const model = require('./models');

module.exports = {

  getFeatured: (req, res) => {
    model.getFeatured(req.params)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log('could not get featured', err);
        res.sendStatus(500);
      });
  },

  getAll: (req, res) => {
    model.getAll(req.params)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log('could not get all', err);
        res.sendStatus(500);
      });
  },

};
