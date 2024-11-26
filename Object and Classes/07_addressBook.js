function addressBook(input){
const addressBook = {};


input.forEach(e => {
    const[name,address]=e.split(':');
    addressBook[name]=address;
});

const addressBookSortable = Object.entries(addressBook);

 addressBookSortable.sort(([keyA], [keyB]) => {
return keyA.localeCompare(keyB);
});


 for (const [name,address] of addressBookSortable) {
    console.log(`${name} -> ${address}`);
}
}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);
    
//     Bill -> Ornery Rd
//    Peter -> Carlyle Ave
//    Tim -> Doe Crossing

   addressBook(['Bob:Huxley Rd',
   'John:Milwaukee Crossing',
   'Peter:Fordem Ave',
   'Bob:Redwing Ave',
   'George:Mesta Crossing',
   'Ted:Gateway Way',
   'Bill:Gateway Way',
   'John:Grover Rd',
   'Peter:Huxley Rd',
   'Jeff:Gateway Way',
   'Jeff:Huxley Rd']);
   
//    Bill -> Gateway Way
//    Bob -> Redwing Ave
//    George -> Mesta Crossing
//    Jeff -> Huxley Rd
//    John -> Grover Rd
//    Peter -> Huxley Rd
//    Ted -> Gateway Way
   