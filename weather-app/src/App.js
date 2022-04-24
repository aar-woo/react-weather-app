import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    async function fetchWeather() {
      let forecastResponse = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Orange&appid=7f4ddd7fea09e7bc32942448d698c69e&units=imperial');
      let forecastData = await forecastResponse.json();
      console.log('forecast data:', forecastData)

      let todaysWeather = {};

      todaysWeather.date = forecastData.list[0].dt_txt;
      todaysWeather.maxTemp = forecastData.list[0].main.temp_max;
      todaysWeather.minTemp = forecastData.list[0].main.temp_min;
      
      console.log('todaysWeather obj', todaysWeather);

      const parsedForecastData = [];
      parsedForecastData.push(todaysWeather);
      for (let i = 1; i < 26; i += 8) {
        const day = {};
        const currDayForecast = forecastData.list[i];
        day.date = currDayForecast.dt_txt;
        day.maxTemp = currDayForecast.main.temp_max;
        day.minTemp = currDayForecast.main.temp_min;
        parsedForecastData.push(day);
      }

      
      console.log('parsed', parsedForecastData)
    }

    fetchWeather();

  }, []);


  return (
    <div>
      <p>
        Weather data: ?
      </p>
    </div>
  )

}

export default App;
