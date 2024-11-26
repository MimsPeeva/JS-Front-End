function addSubtract(n1,n2,n3){
    const sum = (x,y)=>x+y;
    const subtract = (x,y)=>x-y;

    return subtract(sum(n1,n2),n3);
}
console.log(addSubtract(23, 6, 10));
console.log(addSubtract(1,17,30));
console.log(addSubtract(42,58,100));