 function solve(arr, n) {  
    const newArr = [];
   for ( let i = 0; i < arr.length; i++ ) {
       if ( i % n === 0 ) newArr.push(arr[i])
    }
   return newArr;
}
        
console.log( solve(['5','20','31','4','20'], 2) );  // ['5', '31', '20']
console.log( solve(['dsa','asd','test','tset'], 2) ); // ['dsa', 'test']
console.log( solve(['1','2','3','4','5'], 6) ); // ['1']