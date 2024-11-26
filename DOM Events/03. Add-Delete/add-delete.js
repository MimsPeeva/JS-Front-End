


function addItem() {

    function deleteItem(e){
        e.currentTarget.parentElement.remove();
    
    }


    const itemsToImport = document.querySelector('#newItemText');
    const items = document.querySelector('#items');
 if (itemsToImport.value=='') { return;
 }
    const newListValue = document.createElement('li');
    const deleteButton = document.createElement('a');


 newListValue.textContent = itemsToImport.value;
 deleteButton.setAttribute('href','#');
deleteButton.textContent='[Delete]';

deleteButton.addEventListener('click',deleteItem);

newListValue.appendChild(deleteButton);

 items.appendChild(newListValue);

 itemsToImport.value='';
}
