function solve(text,word){
// let words = text.split(' ');
// let counter = 0;
// for(let w of words){
// if (w==word) {
//     counter++;
// }
// }
// console.log(counter);

const pattern = new RegExp(`\\b${word}\\b`, 'g');
const result = text.match(pattern) || [];
console.log(result.length);
}
solve('This is a word and it also is a sentence','is');
solve('softuni is great place for learning new programming languages','softuni');

