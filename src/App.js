import hot from './assets/hot.jpg';
import cold from './assets/cold.jpg';
import Descriptions from './components/Descriptions';
import { useEffect, useState } from 'react';
import { getWeatherData } from './weatherService';

function App() {
  const [city, setCity] = useState('Irkutsk');
  const [weather, setWeather] = useState('');
  const [units, setUnits] = useState('metric');
  const [background, setBackground] = useState(hot);

  useEffect(() => {
    const fetchWeather = async() => {
      const data = await getWeatherData(city, units);
      setWeather(data);
      const threshold = units === 'metric' ? 10 : 60;
      if (data.temp < threshold) {
        setBackground(cold);
      } else {
        setBackground(hot);
      }
    }
    fetchWeather();
  }, [units, city])

  const cityQuery = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  }

  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <div className='overlay'>
        {
          weather && (
            <div className='container'>
              <div className='section section_inputs'>
                <input onKeyDown={cityQuery} type='text' name='city'></input>
              </div>
              <div className='section section_temperature'>
              <div className='icon'>
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={`${weather.iconURL}`} alt='weatherIcon'></img>
                <h3>Статус:{`${weather.description}`}</h3>
              </div>
              <div className='temperature'>
                <h1>{`${weather.temp.toFixed()}`}°C</h1>
              </div>
            </div>
          <Descriptions weather={weather}/>
        </div>
        )}
      </div>
    </div>
  );
}

export default App;
