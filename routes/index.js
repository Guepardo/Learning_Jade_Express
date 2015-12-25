var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*Páginas com as lições básicas de .jade*/
router.get('/basics', function(req, res, next) {
	console.log(req.session); 

if(req.session.length == 0 )
	req.session.contador = 0;
else
	req.session.contador++; 
	//Linhas de código para carregar as varáveis internas do render. 
  res.render('basics',{maintainer: {
	    name: 'Forbes Lindesay',
	    twitter: '@ForbesLindesay',
	    blog: 'forbeslindesay.co.uk', 
	    count: req.session.contador
	  }
	}
);
});


module.exports = router;
	