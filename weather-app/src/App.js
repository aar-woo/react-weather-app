import './App.css';
import {useState, useEffect} from 'react';

function App() {

  useEffect(() => {
    async function fetchWeather() {
      let forecastResponse = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Orange&appid=7f4ddd7fea09e7bc32942448d698c69e&units=imperial');
      let forecastData = await forecastResponse.json();
      console.log('forecast data:', forecastData)

      let todaysWeather = {};
      todaysWeather.max = forecastData.list[0].main.temp_max;
      todaysWeather.min = forecastData.list[0].main.temp_min;
      
      console.log('todaysWeather obj', todaysWeather);

      
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
