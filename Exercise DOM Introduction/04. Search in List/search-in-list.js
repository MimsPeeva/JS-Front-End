function solve() {
   const towns = document.querySelectorAll('#towns li');
   const searchedWords = document.querySelector('#searchText').value.toLowerCase();
const result = document.querySelector('#result');
   let count = 0;
   if(searchedWords=='') return;
towns.forEach(town=>{

   town.style.fontWeight = 'normal';
   town.style.textDecoration = 'none';

   if(town.textContent.toLowerCase().includes(searchedWords)){
     town.style.fontWeight = 'bold';
      town.style.textDecoration = 'underline';
count++;
    }
 });

   result.textContent=`${count} matches found`;
}