function city(objCity){
const keys = Object.keys(objCity);

for(const key of keys){
console.log(`${key} -> ${objCity[key]}`);
}
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);

// name -> Sofia
// area -> 492
// population -> 1238438
// country -> Bulgaria
// postCode -> 1000

city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
);

// name -> Plovdiv
// area -> 389
// population -> 1162358
// country -> Bulgaria
// postCode -> 4000
