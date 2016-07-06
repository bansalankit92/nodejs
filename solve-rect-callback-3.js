var rect=require('./rect_callback_3');

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

solveRect('a',3);
solveRect(-10,8);
solveRect(20,10);
solveRect(4,5);