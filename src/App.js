import React, { useState } from 'react';
import './App.css';
import './styles.css';


const api ={
  key:'18f534723a9c571ebaa202b729890f33',
  base:'https://api.openweathermap.org/data/2.5/'
}

function App() {
  const [query,setQuery] = useState('')
  const [weather,setWeather] = useState({})

  const search = evt =>{
    if(evt.key==='Enter'){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res =>res.json())
      .then(result =>{
        setWeather(result)
        setQuery('')
        console.log(result)
      })
    }
  } 

  return (
    <div className="App">
      <div className="search-box-container">
                <div class="search-box">
                    <button class="btn-search"><i class="fas fa-search"></i></button>
                    <input type="text" class="input-search" placeholder="Type city name & hit enter" onChange={e =>setQuery(e.target.value)} value={query} onKeyPress={search} ></input>
                </div>
            </div>
            <div>
               <div className="weather-container">
                 {(typeof weather.main !="undefined") ?(
                    <div className="awesome">
                        <div className="actual-temperature">{Math.round(weather.main.temp)}<sup>o</sup><span className="celsius">c</span> </div>
                        <div className="location">{weather.name}, {weather.sys.country}</div>
                        <div className="min-max">Min : {Math.round(weather.main.temp_min)}<sup>o</sup><span>c</span> | Max : {Math.round(weather.main.temp_max)}<sup>o</sup><span>c</span></div>
                        <h1>{weather.weather[0].main}</h1>
                    </div>
                 ) : ('') }
                </div> 
            </div>
    </div>
  );
}

export default App;
