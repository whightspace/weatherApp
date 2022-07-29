import React from 'react'
import './SingleForecastCard.css'

function SingleForecastCard(props) {

  const {
    dt,
    main: {
      feels_like,
      humidity
    },
    weather: [
      { main }
    ]
  } = props.singleForecastData;

  let day = new Date(dt * 1000);
  day = day.toLocaleString('en-US', { weekday: 'long' });

  return (
    <div className='singleForeCard'>
      <div>{day}</div>
      <div>{main}</div>
      <div>
        <img src={require(`../../assets/feels_like.png`)} alt='feels_like'></img>
        <div>{feels_like}ºC</div>
      </div>
      <div>
        <img src={require(`../../assets/humidity.png`)} alt='humidity'></img>
        <div>{humidity}%</div>
      </div>
    </div>
  )
}

export default SingleForecastCard