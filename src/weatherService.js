const API_KEY = '';

const makeIconId = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getWeatherData = async (city, units = 'metric') => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
    const response = await fetch(url);
    const data = await response.json();
    
    const {
        weather, 
        main: {temp, feels_like, temp_min, temp_max, pressure, humidity},
        wind: {speed},
        sys: {country},
        name} 
        = data;

    const {description, icon} = weather[0];

    return {
        description, 
        iconURL: makeIconId(icon), 
        temp, 
        feels_like, 
        temp_min, 
        temp_max, 
        pressure, 
        humidity, 
        speed, 
        country, 
        name
    }
}

export {getWeatherData};