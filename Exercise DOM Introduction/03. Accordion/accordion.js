function toggle() {
   const buttonEl = document.querySelector('#accordion .button');
   const content = document.querySelector('#extra');

   if(content.style.display == 'block'){
    content.style.display ='none';
    buttonEl.textContent ='More';
   }
   else{
    content.style.display ='block';
    buttonEl.textContent ='Less';
   }
}
