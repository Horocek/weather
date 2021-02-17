import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {WeatherTemperature,WeatherWind, Weather} from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <h1>График погоды: Простая линия</h1><br></br><br></br>
    <WeatherTemperature/>
    <WeatherWind/>
    <Weather/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();