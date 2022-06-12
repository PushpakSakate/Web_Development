var rad;

const pi = 3.14;

function Area(rad){
    var area = pi * rad * rad;
    return area;
}
rad = window.prompt("Enter Your Radius !")
console.log(Area(rad));