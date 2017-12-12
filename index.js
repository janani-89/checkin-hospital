var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var port = 3000;

//static folder
app.use(express.static(path.join(__dirname,'public')));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//home route
app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
});
//listen to port
app.listen(port, function(){
    console.log("server started at port"+port);
});