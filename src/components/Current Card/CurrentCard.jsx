import React from 'react'
import './CurrentCard.css'

const CurrentCard = (props) => {
  const {
    weather: [
      {
        main,
        icon
      }
    ],
    main: {
      temp,
      feels_like,
      pressure,
      humidity
    },
    visibility,
    wind: {
      speed
    },
    dt,
    sys: {
      country,
      sunrise,
      sunset
    },
    timezone,
    name
  } = props.weatherData;


  let sunriseTime = new Date(sunrise * 1000);
  sunriseTime = sunriseTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  let sunsetTime = new Date(sunset * 1000);
  sunsetTime = sunsetTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  let timeZone = (new Date(timezone * 1000)).getHours();

  return (
    <div className='currentCard Card'>
      <div className='heading'>
        <div className='weatherCard'>
          <img className='miniIcon' src={require(`../../assets/50d.png`)} alt={props.icon}></img>
          <div className='miniVal'>{main}</div>
        </div>

        <div className='utc'>
          <div>
            {name}, {country}
          </div>
        </div>
      
      </div>

      <div className='rows'>

        <div className='miniCard temp'>
          <img src={require(`../../assets/temperature.png`)} alt='temperature' className='miniIcon'></img>
          <div className='txt'>
            <div className='miniTxt'>Temperature</div>
            <div className='miniVal'>{temp}º C</div>
          </div>
        </div>

        <div className='miniCard feels'>
          <img src={require(`../../assets/feels_like.png`)} alt='feels_like' className='miniIcon'></img>
          <div className='txt'>
            <div className='miniTxt'>Feels Like</div>
            <div className='miniVal'>{feels_like}º C</div>
          </div>
        </div>

        <div className='miniCard pressure'>
          <img src={require(`../../assets/pressure.png`)} alt='pressure' className='miniIcon'></img>
          <div className='txt'>
            <div className='miniTxt'>Pressure</div>
            <div className='miniVal'>{pressure} mBar</div>
          </div>
        </div>

        <div className='miniCard humidity'>
          <img src={require(`../../assets/humidity.png`)} alt='humidity' className='miniIcon'></img>
          <div className='txt'>
            <div className='miniTxt'>Humidity</div>
            <div className='miniVal'>{humidity}%</div>
          </div>
        </div>

        <div className='miniCard visibility'>
          <img src={require(`../../assets/visibility.png`)} alt='visibility' className='miniIcon' style={{ 'borderRadius': '30%' }}></img>
          <div className='txt'>
            <div className='miniTxt'>Visibility</div>
            <div className='miniVal'>{visibility} m</div>
          </div>
        </div>

        <div className='miniCard windSpeed'>
          <img src={require(`../../assets/wind_speed.png`)} alt='wind_speed' className='miniIcon'></img>
          <div className='txt'>
            <div className='miniTxt'>Wind Speed</div>
            <div className='miniVal'>{speed} m/s</div>
          </div>
        </div>

        <div className='miniCard sunrise'>
          <img src={require(`../../assets/sunrise.png`)} alt='sunrise' className='miniIcon'></img>
          <div className='txt'>
            <div className='miniTxt'>Sunrise</div>
            <div className='miniVal'>{sunriseTime}</div>
          </div>
        </div>

        <div className='miniCard sunset'>
          <img src={require(`../../assets/sunset.png`)} alt='sunset' className='miniIcon'></img>
          <div className='txt'>
            <div className='miniTxt'>Sunset</div>
            <div className='miniVal'>{sunsetTime}</div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default CurrentCard