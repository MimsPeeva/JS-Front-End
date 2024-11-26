function deleteByEmail() {
 const tableInfo = document.querySelectorAll('tbody tr td:nth-child(2)');
 const emailToCheck = document.querySelector('input[name="email"]').value.toLowerCase();
const result = document.querySelector('#result');

    if (emailToCheck == '') {return;}

    emailToCheck.forEach(e => {
       if (! e.textContent.toLowerCase().includes(emailToCheck)) {
            result.textContent='Not found.';
         }
         else {
            
             result.textContent='Deleted.';
             e.parentElement.remove();
        }
     });


    // const emailToSearchFor = document.getElementsByName("email")[0].value;
    // const resultElement =document.querySelector('#result');

    // const emails = Array.from(document.querySelectorAll("tbody tr td:last-child"));
    // const emailToDelete = emails.find(e => e.textContent === emailToSearchFor);

    // if (emailToDelete) {
    //     emailToDelete.parentElement.remove();
    //     resultElement.textContent = "Deleted.";
    // } else {
    //     resultElement.textContent = "Not found.";
    // }
}
