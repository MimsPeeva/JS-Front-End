document.addEventListener('DOMContentLoaded', solve);

function solve() {

    function sectionFocusedEventHandler(event){
event.target.parentElement.classList.add('focused');
    }

    function sectionBluredEventHandler(event){
        event.target.parentElement.classList.remove('focused');
            }

            const panelEl = document.querySelectorAll('input[type="text"]');

            panelEl.forEach(p=>{
p.addEventListener('focus', sectionFocusedEventHandler);
p.addEventListener('blur', sectionBluredEventHandler);

            })
}