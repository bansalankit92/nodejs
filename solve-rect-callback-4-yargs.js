var rect=require('./rect_callback_3');
var argv=require('./node_modules/yargs')
.usage('usage : --l[num] --b[num]')
.demand(['l','b'])
.argv;
function solveRect(l,b){
    rect(l,b,function(err,rectangle){
         if(err){
            console.log(err);
        }else{
            console.log('perimeter : '+rectangle.perimeter());
            console.log('area :'+rectangle.area());
        }
    });
}

solveRect(argv.l,argv.b);