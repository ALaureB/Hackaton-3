var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
	title: 'Test Sushis project'
  });
});

router.post('*', function (req, res, next) {
  console.log(req.body);
  switch (req.body.result.action) {
    case 'age':
      res.json({
        speech: `${$number} ans, quel bel âge !`,
        source: 'webhook'
      });
      break;
    case 'cities':
      // Sur le site de sushi shop -> cheerio -> récupérer le prix 
      console.log(req.body.result.parameters.product);
      res.json({
        speech: `${$geo-city-fr} quelle belle ville !`,
        source: 'webhook'
      });
      break;

    default:
      res.json({
        speech: 'Je ne comprends pas.',
        source: 'webhook'
      });
  }
});

module.exports = router;
