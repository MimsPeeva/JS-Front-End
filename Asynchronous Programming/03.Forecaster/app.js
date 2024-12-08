function attachEvents() {
    const icons = {
        'Sunny': '&#x2600', // ☀
        'Partly sunny': '&#x26C5', // ⛅
        'Overcast': '&#x2601', // ☁
        'Rain': '&#x2614', // ☂
        'Degrees': '&#176' // °
    }
    
    const locationEl = document.querySelector('#location');
    const getWeatherButn = document.querySelector('#submit');
    const currentDivEl = document.querySelector('#current');
    const upcomingDivEl = document.querySelector('#upcoming');
    const forecastDivEl = document.querySelector('#forecast');
    const url = "http://localhost:3030/jsonstore/forecaster/locations";

    fetch(url)
    .then(response => response.json())
    .then((data) => {
const currentUrl = `http://localhost:3030/jsonstore/forecaster/today/:'${data.code}`;
const upcomingUrl=`http://localhost:3030/jsonstore/forecaster/upcoming/:${data.code}`;
forecastDivEl.style.display = true;
    })
    .catch(error => forecastDivEl.textContent='Error');
}

attachEvents();