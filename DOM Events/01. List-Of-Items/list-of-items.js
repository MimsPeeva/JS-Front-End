function addItem() {
   const itemsToImport = document.querySelector('#newItemText');
   const items = document.querySelector('#items');

   const newListValue = document.createElement('li');
newListValue.textContent = itemsToImport.value;
items.appendChild(newListValue);
}