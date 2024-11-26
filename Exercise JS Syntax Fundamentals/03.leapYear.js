function solve(year){
    let result;
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
            result='yes';
    }
else {  result='no';
}
console.log(result);
}
solve(1984);
solve(2003);
solve(4);