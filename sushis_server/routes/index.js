var express = require('express');
var router = express.Router();

router.all('*', function (req, res, next) {
  console.log(req.body);
  switch (req.body.result.action) {
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
        speech: 'Je n\'ai pas compris',
        source: 'webhook'
      });
  }
});

module.exports = router;
