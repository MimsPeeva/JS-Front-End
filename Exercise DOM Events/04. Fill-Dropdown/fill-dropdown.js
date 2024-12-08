document.addEventListener('DOMContentLoaded', solve);

function solve() {
  
   const menuEl = document.querySelector('#menu');

   document.querySelector('form').addEventListener('submit',(e) => {
    e.preventDefault();

    const newItemTextEl = e.target.querySelector('#newItemText').value;
    const newItemValueEl = e.target.querySelector('#newItemValue').value;

    if (newItemTextEl==''|| newItemValueEl=='') {return;}

    const newItem = document.createElement('option');
    newItem.textContent = newItemTextEl;
    newItem.setAttribute('value',newItemValueEl);

    menuEl.append(newItem);
    e.target.reset();
    e.target.querySelector('#newItemText').focus();

   })
}