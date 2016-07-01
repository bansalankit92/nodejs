var rect=require('./2rectexport');

function solveRect(l,b){
    if(l<=0||b<=0)
        console.log("The value of length and breadth should be greater than 0/ZERO ");
    else {
        console.log("Perimeter : "+rect.perimeter(l,b) );
        console.log("Area : "+rect.area(l,b));
        
    }
}

solveRect(10,20);
solveRect(5,6);
solveRect(-2,-8);