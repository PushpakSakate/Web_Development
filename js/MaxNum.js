var a,b,c ;
var p;

// Print Max Number among Three Numbers

function MaxNum(a,b,c) {
    if (a > b && a > c){
        return a;
    }
    else if (b > a && b > c){
        return b;
    }
    else if (c > a && c > b){
        return c;
    }
}
 p = MaxNum(5,2,3);
 console.log(p);