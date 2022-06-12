const arr = [10,20,30,40,50,60];

/* let arr2 = arr.map((elements,index,array) => {
    // console.log(elements);
    return elements >30;
});
console.log(arr);
console.log(arr2); */

const arr2 = arr.map((x) => x * x);
console.log(arr2);