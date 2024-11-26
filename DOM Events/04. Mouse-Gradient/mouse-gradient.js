function attachGradientEvents() {
    const resultEl = document.querySelector('#result');
    const gradientEl = document.querySelector('#gradient');

    gradientEl.addEventListener('mousemove', (e)=>{
const currPossition = e.offsetX;
const elWidth = e.currentTarget.clientWidth;
const percent = Math.floor((currPossition / elWidth)*100);
resultEl.textContent = percent+'%';
    });
}

