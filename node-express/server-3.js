var express=require('express');
var morgan=require('morgan');
var body_parser=require('body-parser');

var hostname='localhost';
var port=3000;

var app=express();


app.use(morgan('dev'));
app.use(body_parser.json());


app.all('/blogs',function(req,res,next){
   res.writeHead(200,{'content-type':'text/html'});
    next();
});

app.get('/blogs',function(req,res,next){
    res.end("You can read all my blogs. Thanks!!!");
});

app.post('/blogs',function(req,res,next){
    res.end("Adding new blog with Title "+req.body.title+" and description : "+req.body.description);
});

app.delete('/blogs',function(req,res,next){
    res.end("Deleting all blogs");
});

app.put('/blogs',function(req,res,next){
    res.end("Modifyting blog data Title "+req.body.title+" and description : "+req.body.description);
});

app.get('/blogs/:bid',function(req,res,next){
    res.end("getting specific blog from url "+req.params.bid);
});


app.use(express.static(__dirname+'/public'));

app.listen(port,hostname,function(){
   console.log(`server running at http://${hostname}:${port}`); 
});