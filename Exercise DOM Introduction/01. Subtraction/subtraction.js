function subtract() {
    const firstN = document.querySelector('#firstNumber')
    const secondN =document.querySelector('#secondNumber');
    const resultEl = document.querySelector('#result');

    const result = Number(firstN.value)-Number(secondN.value);
    //document.querySelector('#result').value = firstN-secondN;

    resultEl.textContent = result.toFixed(2);
}