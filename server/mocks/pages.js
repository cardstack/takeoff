module.exports = function(app) {
  var express = require('express');
  var pagesRouter = express.Router();

  var data = [
    {
      id: '82d01832-d2e0-4043-9017-dd54742c20fe',
      templateId: 0,
      title: 'The Mutants Are Revolting',
      imageUrl: 'http://www.placecage.com/c/300/350'
    },
    {
      id: '6bd522d8-bb60-4da5-ba29-31d5e5d9b2fd',
      templateId: 1,
      title: 'A Taste of Freedom',
      imageUrl: 'http://www.placecage.com/g/300/350'
    },
    {
      id: '2ac15ee1-4df5-4812-a796-8c56f28d46eb',
      templateId: 0,
      title: 'How Hermes Requisitioned His Groove Back',
      imageUrl: 'http://www.placecage.com/300/350'
    }
  ];

  pagesRouter.get('/', function(req, res) {
    res.send({
      'pages': data
    });
  });

  pagesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  pagesRouter.get('/:id', function(req, res) {
    res.send({
      'pages': {
        id: req.params.id
      }
    });
  });

  pagesRouter.put('/:id', function(req, res) {
    res.send({
      'pages': {
        id: req.params.id
      }
    });
  });

  pagesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/pages', pagesRouter);
};
