var http=require('http');
var hostname='localhost';
var fs=require('fs');
var path=require('path');
var port=3000;

var server=http.createServer(function(req,res){
   //console.log(req.headers);
    if(req.method=='GET'){
        
    
        var fileURL;
        if(req.url=='/')fileURL='/index.html';
        else fileURL=req.url;
        
        var filePath=path.resolve('./public'+fileURL);
        
        var fileExt=path.extname(filePath);
        
        if(fileExt=='.html'){
            fs.exists(filePath,function(exist){
                if(!exist){
                    res.writeHead(404,{'Content-Type':'text/html'});
                    res.end('<h1>Error 404 :'+fileURL+' not found on server </h1>');
                    return;
                }
                res.writeHead(200,{'Content-Type':'text/html'});
                fs.createReadStream(filePath).pipe(res);

            });
        }else{
            res.writeHead(400,{'Content-Type':'text/html'});
            res.end('<h1>Error 400 :'+fileURL+' this is not html file  </h1>');
            return;
        }
        
    }else{
        res.writeHead(400,{'Content-Type':'text/html'});
        res.end('<h1>Error 400 :'+fileURL+' Only get request is allowed </h1>');
        return;
    }
    
});

server.listen(port,hostname,function(){
    console.log(`Server running at http://${hostname}:${port}/`);
    
});