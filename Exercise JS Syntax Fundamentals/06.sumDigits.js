function solve(n){
    const stringFromNumber=n.toString();

    let result=0;
    for (let i = 0; i < stringFromNumber.length; i++) {
     result += Number(stringFromNumber[i]);
    }
    console.log(result);
}
solve(245678);
solve(297561);