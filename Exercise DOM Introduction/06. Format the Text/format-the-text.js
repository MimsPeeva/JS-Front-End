function solve() {
 const inputEl = document.querySelector('#input');
 const outputEl = document.querySelector('#output');

 const sentences = inputEl.value.split('. ');

 const sentPerPar = 3;
const numberOfPar = Math.ceil(sentences.length / sentPerPar);

let output = '';
for (let i = 0; i < numberOfPar; i++) {
  const p = i * numberOfPar;
  
  output +='<p>';
  output +=sentences.slice(p,(p + sentPerPar)).join('. ');
  output +='</p>';

}
outputEl.innerHTML=output;
}