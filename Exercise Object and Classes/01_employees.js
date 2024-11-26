function employees(arr){
    const employees={};
   
    arr.forEach(element => {
        employees[element]=element.length;
    });

for (const name in employees) {
console.log(`Name: ${name} -- Personal Number: ${employees[name]}`);    
}
}


employees(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']);
    
    // Name: Silas Butler -- Personal Number: 12
    // Name: Adnaan Buckley -- Personal Number: 14
    // Name: Juan Peterson -- Personal Number: 13
    // Name: Brendan Villarreal -- Personal Number: 18


    employees(['Samuel Jackson','Will Smith','Bruce Willis','Tom Holland']);
    
    // Name: Samuel Jackson -- Personal Number: 14
    // Name: Will Smith -- Personal Number: 10
    // Name: Bruce Willis -- Personal Number: 12
    // Name: Tom Holland -- Personal Number: 11
    