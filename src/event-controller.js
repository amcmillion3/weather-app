import {getData} from "./fetch-weather-data";

async function domEvents() {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    
    searchButton.addEventListener('click', async(e) => {
        e.preventDefault();
        if(searchInput == null) {
            return alert('Please enter a city');
        } else {
            const cityName = searchInput.value;
            const weatherData = await getWeatherData(cityName);
            console.log(weatherData);
            searchForm.reset();
        };
    });

    async function getWeatherData(city) {
        const weatherData = await getData(city);
        return weatherData;
    };
    
};

export {domEvents};
