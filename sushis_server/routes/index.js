var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
	title: 'Test Sushis project'
  });
});

router.all('*', function (req, res, next) {
  console.log(req.body);
  switch (req.body.result.action) {
    case 'bonjour':
    res.json({
    	speech: `Bonjour cher utilisateur ! Comment t'appelles-tu?`,
    	source: 'webhook'
    });
    break;

    case 'prenom':
    res.json({
    	speech: `${req.body.result.parameters.prenom}, comment puis-je t'aider ?`,
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
