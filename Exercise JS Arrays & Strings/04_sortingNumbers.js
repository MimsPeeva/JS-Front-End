function solve(arr){
const zippedArr=[];
const arrLength=arr.length;

arr.sort((a,b)=> a-b);
for (let i = 0; i < arrLength; i++) {
    if (i%2==0) {
       const el = arr.shift();
       zippedArr.push(el);
    }
    else
    {
        const el = arr.pop();
        zippedArr.push(el);
    }
}
return zippedArr;
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
