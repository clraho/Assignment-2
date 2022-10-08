var express = require('express'); //import express in our file
var app = express();

app.use(express.static('public'))  //static choose what is the main folder

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.listen(3000,function(){
    console.log('Example app listenning on port 3000!')
});