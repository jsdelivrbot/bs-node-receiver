var express = require('express')
var multer  = require('multer')

var upload = multer({ dest: 'uploads/' })

var app = express()

app.listen(1357, function() {	
	console.log('Listening at port 1357');
});

app.get('/funda/bsuploadclient', function(req, res){
	res.send('testsubmission.htm');
});

app.post('/funda/bsuploadserver', upload.any(), function (req, res, next) {
  // req.files is array of `photos` files
  console.log(req.files);
  // req.body will contain the text fields, if there were any
  console.log(req.body);
  res.send('matcha cupcake');
})