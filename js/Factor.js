var arr = [];
var F;

function FactNum(F){
    for(var i = 1; i <= F;i++){
        if(F % i == 0){
            arr.push(i);
        }
    }
    return arr;
}
console.log(FactNum(7).toString());