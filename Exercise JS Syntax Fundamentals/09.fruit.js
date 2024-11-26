function solve(fruit,grams,kilogram){
    let gramsInKg=grams/1000;
    console.log(`I need $${(gramsInKg*kilogram).toFixed(2)} to buy ${(gramsInKg).toFixed(2)} kilograms ${fruit}.`);
}
solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);