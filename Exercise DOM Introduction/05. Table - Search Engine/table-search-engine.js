function solve() {
   const students = document.querySelectorAll('table tbody tr');
   const searchedWords = document.querySelector('#searchField').value.toLowerCase();
const result = document.querySelector('#result');


   if(searchedWords=='') return;

   students.forEach(student=>{
      student.classList.remove('select');
   
      if(student.textContent.toLowerCase().includes(searchedWords)){

         student.classList.add('select');
       }
    });
   
}