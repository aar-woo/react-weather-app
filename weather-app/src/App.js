import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [data, setWeatherData] = useState('none');
  let response = fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=7f4ddd7fea09e7bc32942448d698c69e')
    .then(response => response.json())
    .then(data => console.log(data));

  // function setWeather(data) {
  //   setWeatherData(data);
  // }

  // useEffect(() => {
  //   setWeatherData(response);
  // })


  return (
    <div>
      <p>
        Weather data:
      </p>
    </div>
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
