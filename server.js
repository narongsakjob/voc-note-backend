let express = require('express'),
	app = express(),
	port = process.env.PORT || 3000

app.listen(port)

console.log('Vocabulary note RESTful API server start on port : ' + port)

