function solve() {
    const infoEl = document.querySelector('#info span');
    const departBtnEl = document.querySelector('#depart');
    const arriveBtnEl = document.querySelector('#arrive');
    let stopInfo = {
        next: 'depot',
        name: ''
    };


    function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stopInfo.next}`;
        departBtnEl.disabled=true;

         fetch(url)
         .then(response => response.json())
         .then(result =>{
             stopInfo.name=result.name;
            stopInfo.next=result.next;
            infoEl.textContent=`Next stop ${result.name}`;
            arriveBtnEl.disabled=false;
         }
         )
         .catch(error => {
           infoEl.textContent='Error';
            arriveBtnEl.disabled=true;
            departBtnEl.disabled=true;

        });
    }

    async function arrive() {
        infoEl.textContent = `Arraving at ${stopInfo.name}`
        departBtnEl.disabled = false;
        arriveBtnEl.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();