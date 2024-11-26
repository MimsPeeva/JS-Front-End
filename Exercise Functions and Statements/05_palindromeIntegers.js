function palindromeIntegers(numbers){

const isPalindrome = (num) => {
const strNum = num.toString();
const reverseNum = strNum.split('').reverse().join('');

return strNum === reverseNum;
}
numbers.forEach(num => console.log(isPalindrome(num)));
}
palindromeIntegers([123,323,421,121]);	//false true false true
palindromeIntegers([32,2,232,1010]);	//false true true false
