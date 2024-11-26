function solve(n){
    const stringFromNumber=n.toString();

    let result=0;
    let isTrue=true;
    for (let i = 0; i < stringFromNumber.length; i++) {
        if (stringFromNumber[i]!==stringFromNumber[i+1]
        && i< stringFromNumber.length -1 ) {
            isTrue=false;}
     result += Number(stringFromNumber[i]);
    }
    console.log(isTrue);
    console.log(result);
}
solve(2222222);
solve(1234);