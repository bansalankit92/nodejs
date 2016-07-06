var express=require('express');
var morgan=require('morgan');
var body_parser=require('body-parser');

var hostname='localhost';
var port=3000;

var app=express();


app.use(morgan('dev'));


var route= express.Router();
route.use(body_parser.json());

route.route('/')
.all(function(req,res,next){
   res.writeHead(200,{'content-type':'text/html'});
    next();
})
.get(function(req,res,next){
    res.end("I am using express route - You can read all my blogs of tag : "+req.query.tag);
})
.post(function(req,res,next){
    res.end("Adding new blog with Title= "+req.body.title+" and description : "+req.body.description);
})
.delete(function(req,res,next){
    res.end("Deleting all blogs");
})
.put(function(req,res,next){
    res.end("Modifyting blog data Title= "+req.body.title+" and description : "+req.body.description);
})

route.route('/:bid').get(function(req,res,next){
    res.end("getting specific blog of id :"+req.params.bid );
});

app.use('/blogs',route);

app.use(express.static(__dirname+'/public'));

app.listen(port,hostname,function(){
   console.log(`server running at http://${hostname}:${port}`); 
});