module.exports = function(app) {
  var express = require('express');
  var cardsRouter = express.Router();

  cardsRouter.get('/', function(req, res) {
    res.send({
      'cards': []
    });
  });

  cardsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  cardsRouter.get('/:id', function(req, res) {
    res.send({
      'cards': {
        id: req.params.id
      }
    });
  });

  cardsRouter.put('/:id', function(req, res) {
    res.send({
      'cards': {
        id: req.params.id
      }
    });
  });

  cardsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/cards', cardsRouter);
};
