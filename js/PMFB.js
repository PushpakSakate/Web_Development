/* let arr =[];
let c = 0;

function PrimeNum(P){
    for(let i = 2;i<=P;i++){
        c = 0;
        for(var a =2;a<i;a++){
            var Num = i/a;
            if(Num % 1 == 0){
                c++;
            }
        }
        if (c == 0){
            arr.push(i);
        }
    }
    return arr;
}
console.log(PrimeNum(6)); */


const F = 6;
var a = 0, b = 1, c;

function Fibonacci(F){
    for (let i = 1; i<=F;i++){
        console.log(a);
        c = a + b;
        a = b;
        b = c;
    }
}
Fibonacci(F);

