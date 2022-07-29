import React from "react";
import logo from '../assets/011-cloud.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

function Header(props) {

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

  let date = new Date(props.dt * 1000);
  date = date.toLocaleDateString('en-GB', options);

  return (
    <header>
      <div>
        <img src={logo}></img>
        Weather App
      </div>
      <div className="dt">
        {date}
      </div>
    </header>
  );
}

export default Header;