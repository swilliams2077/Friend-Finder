var express = require ("express"); 
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;
var app = express();
var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(bodyParser.json({ type: 'application/*+json' }))

app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

app.use(bodyParser.text({ type: 'text/html' }))

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT)
});




