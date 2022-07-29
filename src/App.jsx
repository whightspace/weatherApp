import './App.css';
import React, { useState, useEffect } from 'react';
import { getData } from './API';
import Header from './components/Header';
import Footer from './components/Footer';
import CurrentCard from './components/Current Card/CurrentCard';
import PollutionCard from './components/Pollution Card/PollutionCard';
import ForecastCard from './components/Forecast Card/ForecastCard';
import { currData } from './components/dummy data/currentData';
import { forData } from './components/dummy data/forecastData'
import { polData } from './components/dummy data/pollutionData'

function App() {

  const currentData = currData;
  const { list: [{ components }] } = polData;
  const pollutionData = components;
  const forecastData = forData;

  const [data, setData] = useState();

  useEffect(() => {
    (async() => {
      const dt = await getData();
      setData(dt)
    })();
  }, [])

  // console.log('App Reporting: ', data && data[1])
  // console.log('App Reporting: ', (data?.cD.weather[0].main));
  
  const cD = data && data[0];
  const pD = data && data[1];
  const fD = data && data[2];

  return (
    <div className="App">
      <Header
        dt={currentData.dt}
      />
      <div className='content'>

        <CurrentCard
          weatherData={currentData}
        />
        <PollutionCard
          pollutionData={pollutionData}
        />
        <ForecastCard
          forecastData={forecastData}
        />

      </div>
      <Footer />
    </div>
  );

}

export default App;
