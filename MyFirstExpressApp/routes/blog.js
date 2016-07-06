var express = require('express');
var route = express.Router();


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


module.exports = route;
