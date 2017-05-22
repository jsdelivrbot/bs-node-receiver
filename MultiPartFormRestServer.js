var express = require('express');
var multer  = require('multer');
var path = require('path');

var upload = multer({ dest: 'uploads/' });

var app = express();

app.set('port', (process.env.PORT) || 5000);

app.listen(app.get('port'), function() {	
	console.log('Listening at port ' + app.get('port'));
});

app.get('/funda/bsuploadclient', function(req, res){
	res.sendFile('testsubmission.htm', {root: path.join(__dirname, './')});
});

app.post('/funda/bsuploadserver', upload.any(), function (req, res, next) {
	// req.files is array of `photos` files
	console.log(req.files);
	// req.body will contain the text fields, if there were any
	console.log(req.body);

	req.files.forEach( function(file, index){  	
	    console.log("file " + index);  
	});

	res.send('matcha cupcake');

});