function sumTable() {
    const tableCells = document.querySelectorAll('table tbody tr:not(:last-child) td:last-child');

    const sum = document.querySelector('#sum');

    sum.textContent = [...tableCells]
    .map(el=>Number(el.textContent))
    .reduce((sum,num)=>sum+num,0)
    .toFixed(2);
}