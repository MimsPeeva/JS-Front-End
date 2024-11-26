function factorialDivision(int1,int2){
let factorialFirst =1;
let factorialSecond = 1;
for (let i = int1; i > 1; i--) {
   factorialFirst*=i;
}
for (let i = int2; i > 1; i--) {
    factorialSecond*=i;
 }
const result = factorialFirst / factorialSecond;

console.log(`${result.toFixed(2)}`);
}
factorialDivision(5,2);	//60.00
factorialDivision(6,2); //360.00
