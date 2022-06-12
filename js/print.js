function Show() {
    var a = document.getElementsByTagName('input');
    console.log(a);
    var b = document.getElementById('demo');
    console.log(b);
    b.innerHTML = a[0].value;
}