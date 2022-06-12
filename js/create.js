
function Add() {
    var a = document.createElement('p');
    var b = "Child_1";
    var c = document.getElementById('Parent');
    a.innerHTML = b;
    c.append(a);
}