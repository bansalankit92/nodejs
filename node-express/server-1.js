var express=require('express');
var http=require('http');


var hostname='localhost';
var port=3000;

var app=express();


app.use(function(req,res,next){
    
    res.writeHead(200,{'content-type':'text/html'});
    res.end('<h1>Hello Ankit. This is First NodeJs-Express App</h1>');
});

var server=http.createServer(app).listen(port,hostname,function(){
   console.log(`server running at http://${hostname}:${port}`); 
});