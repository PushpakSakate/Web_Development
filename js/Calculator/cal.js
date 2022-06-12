/* function sum(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mul(x, y) {
    return x * y;
}

function div(x, y) {
    return x / y;
}


var a, b;
a = document.getElementById('num1').value;
b = document.getElementById('num2').value;
var z = sum(a, b);
document.getElementById("result").innerHTML = z;

var p = sub(a, b);
document.getElementById("result").innerHTML = p;

var q = mul(a, b);
document.getElementById("result").innerHTML = q;

var r = div(a, b);
document.getElementById("result").innerHTML = r; */

let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

for(item of buttons){
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Buttons text is ', buttonText);
        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value += screenValue;
        }
        else if (buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '='){
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value += screenValue;
        }
    })
}