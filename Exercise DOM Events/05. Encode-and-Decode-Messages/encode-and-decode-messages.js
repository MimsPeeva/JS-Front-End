document.addEventListener('DOMContentLoaded', solve);

function solve() {

   const decodeMessage = document.querySelector('#decode textarea');

   document.querySelector('#encode').addEventListener('submit', (e) => {
    e.preventDefault();
    const inputMessage = e.target.querySelector('textarea');
    const message = inputMessage.value;
    const encodedMessage = message.split('').map(ch => String.fromCharCode(ch.charCodeAt()+1)).join('');

    document.querySelector('#decode textarea').value = encodedMessage;
    inputMessage.value='';
   // e.target.reset();
   })

   document.querySelector('#decode').addEventListener('submit', (e) => {
    e.preventDefault();

    const outputMessage = e.target.querySelector('textarea');
    const message = outputMessage.value;
    const decodedMessage = message.split('').map(ch => String.fromCharCode(ch.charCodeAt()-1)).join('');

    outputMessage.value = decodedMessage;

   })
}