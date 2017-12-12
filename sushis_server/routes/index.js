var express = require('express');
var router = express.Router();

router.get('/l', function(req, res, next) {
  res.render('index', {
	title: 'Sushis project'
  });
});

router.all('*', function (req, res, next) {
  console.log(req.body);
  switch (req.body.result) {
    case 'age':
      res.json({
        speech: 'Le plus proche est à .... ',
        source: 'webhook'
      });
      break;
    case 'cities':
      // Sur le site de sushi shop -> cheerio -> récupérer le prix 
      console.log(req.body.result.parameters.product);
      res.json({
        speech: 'Le prix est ...',
        source: 'webhook'
      });
      break;

    default:
      res.json({
        speech: 'Mwa pas konpran',
        source: 'webhook'
      });
  }
});

module.exports = router;
