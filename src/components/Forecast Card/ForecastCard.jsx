import React from 'react'
import SingleForecastCard from '../Single Forecast Card/SingleForecastCard';
import './ForecastCard.css'

const ForecastCard = (props) => {
  
  const forecastData = props.forecastData.list.filter((data, index) => index < 7);

  return (
    <div className='forecastCard Card'>
      {forecastData.map((data, index) => {
        return (
          <SingleForecastCard
          key = {index}
          id = {index}
          singleForecastData = {data}
          /> 
        );
      }
      )
      }
    </div>
  )
}

export default ForecastCard;