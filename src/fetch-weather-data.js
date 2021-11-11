async function getData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=13a96aa9f8a29a2a7fec3f4f94fcb1a2`, {mode: 'cors'});
        const weatherData = await response.json();
        return weatherData;
    } catch(err) {
        alert(err);
    };
};

export {getData};