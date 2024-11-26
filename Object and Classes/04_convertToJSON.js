function convertToJSON(name,lastName,hairColor){
const object = {
    name,
    lastName,
    hairColor
}
console.log(JSON.stringify(object));
}
convertToJSON('George', 'Jones', 'Brown');//{"name":"George","lastName":"Jones","hairColor":"Brown"}
convertToJSON('Peter', 'Smith', 'Blond');	//{"name":"Peter","lastName":"Smith","hairColor":"Blond"}
