function oddEvenSum(number){
const digits = Math.abs(number).toString().split('').map(Number);

const oddSum=digits.filter(d=>d%2!==0).reduce((sum,d)=>sum+d,0);
const evenSum=digits.filter(d=>d%2===0).reduce((sum,d)=>sum+d,0);

console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddEvenSum(1000435);	 //Odd sum = 9, Even sum = 4
oddEvenSum(3495892137259234);	 //Odd sum = 54, Even sum = 22
