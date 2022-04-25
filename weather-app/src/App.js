import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    async function fetchWeather() {
      let forecastResponse = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Orange&appid=7f4ddd7fea09e7bc32942448d698c69e&units=imperial');
      let forecastData = await forecastResponse.json();
      let todaysWeather = {};

      todaysWeather.date = forecastData.list[0].dt_txt;
      todaysWeather.maxTemp = forecastData.list[0].main.temp_max;
      todaysWeather.minTemp = forecastData.list[0].main.temp_min;
      todaysWeather.weatherIcon = forecastData.list[0].weather[0].description;

      const parsedForecastData = [];
      parsedForecastData.push(todaysWeather);
      for (let i = 1; i < 26; i += 8) {
        const day = {};
        const currDayForecast = forecastData.list[i];
        day.date = currDayForecast.dt_txt;
        day.maxTemp = currDayForecast.main.temp_max;
        day.minTemp = currDayForecast.main.temp_min;
        day.weatherIcon = currDayForecast.weather[0].description;
        parsedForecastData.push(day);
      }

      setForecastData(parsedForecastData);
      
      console.log('parsed', parsedForecastData)
    }

    fetchWeather();

  }, []);


  return (
    <div>

      <div className="flex-column justify-center day-width">
        <h4 className='text-center mb-0 grey'>Tue</h4>
        <img src="http://openweathermap.org/img/wn/10d@2x.png"></img>
        <div className='min-max-div justify-evenly flex'>
          <span>{Math.round(forecastData[0].minTemp)}°</span>
          <span className='grey'>{Math.round(forecastData[0].maxTemp)}</span>
        </div>
      </div>

    </div>
    
  )

}

export default App;
