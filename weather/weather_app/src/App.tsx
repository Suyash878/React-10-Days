import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

interface WeatherData {
  location: {
    name: string;
    country: string;
    region: string;
    localtime: string;
  };
  current: {
    temperature: number;
    feelslike: number;
    weather_descriptions: string[];
    weather_icons: string[];
    wind_speed: number;
    wind_dir: string;
    humidity: number;
    visibility: number;
  };
}

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [location,setLocation] = useState('');
  const [click,setClick] = useState(0);

  useEffect(() => 
  {
    const fetchData = async () => 
      {
        try {
          const response = await axios.get(`http://api.weatherstack.com/current?access_key=3d2e476a854c6d1026c47876a59bf69b&query=${location}`);
          setWeather(response.data);
        }
        catch(err)
        {
          console.log('Some error occurred:' + err);
        }
      }
      fetchData(); 
  },[click]);

  return (
    <>
      <div>
          <h1> Weather App </h1> 
          <input onChange={(e) => 
            {
              setLocation(e.target.value);
            }
          } type="text" value={location} placeholder='Enter location' />
          <button onClick={() => 
            {
              setClick(click => click+1);
            }
          }>Get weather</button>
          <div>
          {weather ? (
          <>
            <h2>Location: {weather.location?.name}, {weather.location?.country}</h2>
            <p>Region: {weather.location?.region}</p>
            <p>Local Time: {weather.location?.localtime}</p>
            <h3>Current Weather:</h3>
            <p>Temperature: {weather.current?.temperature}°C</p>
            <p>Feels Like: {weather.current?.feelslike}°C</p>
            <p>Condition: {weather.current?.weather_descriptions?.[0]}</p>
            <img
              src={weather.current?.weather_icons?.[0]}
              alt={weather.current?.weather_descriptions?.[0]}
            />
            <p>Wind: {weather.current?.wind_speed} km/h {weather.current?.wind_dir}</p>
            <p>Humidity: {weather.current?.humidity}%</p>
            <p>Visibility: {weather.current?.visibility} km</p>
          </>
        ) : (
          <p>Enter a location and click "Get Weather" to see results.</p>
        )}
          </div>
      </div>
    </>
  )
}

export default App
