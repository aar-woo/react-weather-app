import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [forecastData, setForecastData] = useState([{}]);

  async function fetchWeather() {
    let forecastResponse = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely,alerts&appid=7f4ddd7fea09e7bc32942448d698c69e&units=imperial')
    let forecastData = await forecastResponse.json();
    const parsedForecastData = [];
    // const options = {weekday: 'long'}

    console.log('forecast', forecastData);

    for (let i = 0; i < 5; i++) {
      const day = {};
      const currDayForecast = forecastData.daily[i];
     
      day.unixDate = currDayForecast.dt;
      day.maxTemp = currDayForecast.temp.max;
      day.minTemp = currDayForecast.temp.min;
      day.weatherIcon = currDayForecast.weather[0].description;

      const daysDate = new Date(day.unixDate);
      day.weekday = daysDate.getDay();
      parsedForecastData.push(day);
    }

    console.log("parsed", parsedForecastData)
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
