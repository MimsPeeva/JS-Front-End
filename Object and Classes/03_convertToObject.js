function convertToObj(input){
const convertedInJSON = JSON.parse(input);
const entries = Object.entries(convertedInJSON);
for(const [property, value ] of entries){
    console.log(`${property}: ${value}`)
}
}
convertToObj('{"name": "George", "age": 40, "town": "Sofia"}');
//name: George
// age: 40
// town: Sofia


convertToObj('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
// name: Peter
// age: 35
// town: Plovdiv
