function solve(firtsP,secondP){
console.log(firtsP.replaceAll(secondP,'*'.repeat(secondP.length)));
}
solve('A small sentence with some words','small');
solve('Find the hidden word', 'hidden');
