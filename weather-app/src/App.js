import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [forecastData, setForecastData] = useState([{}]);

  async function fetchWeather() {
    let forecastResponse = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Orange&appid=7f4ddd7fea09e7bc32942448d698c69e&units=imperial');
    let forecastData = await forecastResponse.json();
    let todaysWeather = {};
    const options = {weekday: 'long'}

    todaysWeather.date = forecastData.list[0].dt_txt;
    todaysWeather.maxTemp = forecastData.list[0].main.temp_max;
    todaysWeather.minTemp = forecastData.list[0].main.temp_min;
    todaysWeather.weatherIcon = forecastData.list[0].weather[0].description;
    const todaysDate = new Date(todaysWeather.date);
    // todaysWeather.weekday = todaysDate.getDay();
    // todaysWeather.weekday = new Int1.DateTimeFormat('en-US', options).format(todaysDate);

    const parsedForecastData = [];
    parsedForecastData.push(todaysWeather);
    for (let i = 1; i < 26; i += 8) {
      const day = {};
      const currDayForecast = forecastData.list[i];
     
      day.date = currDayForecast.dt_txt;
      day.maxTemp = currDayForecast.main.temp_max;
      day.minTemp = currDayForecast.main.temp_min;
      day.weatherIcon = currDayForecast.weather[0].description;

      const daysDate = new Date(day.date);
      day.weekday = daysDate.getDay();
      parsedForecastData.push(day);
    }
    const today = new Date(parsedForecastData[0].date);
    const weekday = today.getDay();
    console.log('weekday num', weekday)
    console.log('parseed', parsedForecastData)

    setForecastData(parsedForecastData);
  }

  useEffect(() => {
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
