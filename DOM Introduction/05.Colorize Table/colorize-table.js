function colorize() {
    const rows = document.querySelectorAll('table tbody tr');
console.log(rows);
   
[...rows].forEach((el,i)=>{
if(i%2!=0)
{
el.style.backgroundColor='teal';
}
})
}