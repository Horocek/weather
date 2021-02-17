const averageValue = (min, max) => Math.round((min + max) / 2);

const parsToTemperature = (data) =>{
const result = data.list.map((item) =>  { 
  return {
    name : item.dt_txt,
    temperature : averageValue(item.main.temp_min, item.main.temp_max)}

});
return result;
}


const parsToWind = (data) =>{
  const result = data.list.map((item) =>  { 
    return {
      name : item.dt_txt,
      windSpeed : item.wind.speed}
  
  });
  return result;
}


const parsToWeather = (data) =>{
  const result = data.list.map((item) =>  { 
    return {
      name : item.dt_txt,
      weather : item.weather[0].description,
      icon : item.weather[0].icon}
  
  });
  return result;
}


export {parsToTemperature, parsToWind, parsToWeather};