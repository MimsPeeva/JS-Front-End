function solve(num1,num2,operator){
// if (operator=='+') {
//     console.log(num1+num2);
// }
// else if (operator=='-') {
//     console.log(num1-num2);
// }
// else if (operator=='*') {
//     console.log(num1*num2);
// }
// else if (operator=='/') {
//     console.log(num1/num2);
// }
// else if (operator=='%') {
//     console.log(num1%num2);
// }
// else if (operator=='**') {
//     console.log(num1**num2);
// }


let result;
switch(operator)
{
    case '+':result = num1 + num2;break;
    case '-':result = num1 - num2;break;
    case '*':result = num1 * num2;break;
    case '/':result = num1 / num2;break;
    case '%':result = num1 % num2;break;
    case '**':result = num1 ** num2;break;

}
console.log(result);
}
solve(3, 5.5, '*');