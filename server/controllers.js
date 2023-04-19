const model = require('./models');

module.exports = {

  getFeatured: (req, res) => {
    model.getFeatured(req.params)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log('could not get products', err);
        res.sendStatus(500);
      });
  },

};
