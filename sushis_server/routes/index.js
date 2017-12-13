var express = require('express');
var router = express.Router();
fs = require('fs');
path = require('path');

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Test Sushis project'
  });
});

router.all('*', function (req, res, next) {
  fs.readFile(path.join(__dirname, 'stores.json'), 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    var cities = JSON.parse(data).filter(el => { return el.id_store == '79'; });
    console.log(cities);
  })
    switch (req.body.result.action) {
      case 'bonjour':
        res.json({
          speech: `Bonjour cher utilisateur ! Comment t'appelles-tu?`,
          source: 'webhook'
        });
        break;

      case 'prenom':
        res.json({
          speech: `${req.body.result.parameters.any}, comment puis-je t'aider ?`,
          source: 'webhook'
        });
        break;



      default:
        res.json({
          speech: 'Je ne comprends pas, peux-tu reformuler ta demande ?',
          source: 'webhook'
        });
    }
  });

  module.exports = router;