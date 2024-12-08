function getInfo() {
    const stopNameEl = document.getElementById('stopName');
    const listNamesEl = document.getElementById('buses');
    const stopIdEl = document.getElementById('stopId').value;

    stopNameEl.textContent = "Loading...";
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopIdEl}`;

    fetch(url).then(res => res.json())
        .then(result => {
            //listNamesEl.innerHTML = '';
            stopNameEl.textContent = result.name;
            for ([busId, arrivalTime] of Object.entries(result.buses)) {
                let newLi = document.createElement('li');
                newLi.textContent = `Bus ${busId} arrives in ${arrivalTime} minutes`
                listNamesEl.appendChild(newLi);
            }
        })
        .catch(error => stopNameEl.textContent = 'Error');

    }