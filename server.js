let express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
  Schema = require('./api/models/schema'), //created model loading here
  bodyParser = require('body-parser')

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Vocdb'); 
mongoose.connect('mongodb://heroku_bsbj7wkb:e20off75uvmnc8bnb2gn94t8jk@ds119489.mlab.com:19489/heroku_bsbj7wkb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/voc_route'); //importing route
routes(app); //register the route

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port)

console.log('Vocabulary note RESTful API server start on port : ' + port)

