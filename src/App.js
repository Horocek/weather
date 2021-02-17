import React, { Component } from "react";
import './App.css';
import {fetchData} from './utils/Api'
import {parsToTemperature, parsToWind, parsToWeather} from './utils/Tools'
import {
  XAxis,
  YAxis,
  LineChart,
  CartesianGrid,
  Line,
  Legend,
  Tooltip
} from "recharts";


const getWeatherTemperature = async (city) =>  await parsToTemperature(await fetchData(city));
const getWeatherWind = async (city) =>  await parsToWind(await fetchData(city));
const getWeather = async (city) =>  await parsToWeather(await fetchData(city));
const  ListItem = (props) => 
{
    return <h style={{ color: 'red' }}>{props.value}</h>;
}

class WeatherTemperature extends Component 
{
    constructor(){
        super();
        this.state = {city: 'stavropol',
            dataWeather: [{name : "0", temperature : 15},{name : "1", temperature : 15}]
        };
        this.handleChange = this.handleChange.bind(this);
  
    }

    handleChange(event) {
        this.setState({city: event.target.value});
    }


    async buttonGetWeather() {
        this.setState({dataWeather : await getWeatherTemperature(this.state.city),  })
    }
    graphDraw(){
         return(
            <div>
                <LineChart width={1100} height={300} data={this.state.dataWeather}  
                    margin={ { top: 5, right: 30, left: 20, bottom: 5, percent : 10} }>
                    <XAxis dataKey="name" stroke="#000" position="insideBottom"/>
                    <YAxis  unit = "°" dataKey="temperature" stroke="#000"/>
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#eee"/>
                    <Line type="monotone" name = "Температура" dataKey="temperature" stroke="#12b202" activeDot={{ r: 8 }}/>
                </LineChart>
            </div> 
        )   
    }
    render() {
        
        return (
            <div>
                <form>
                    <label>
                        Выберите населенный пункт: <br></br><br></br>  
                        <select value={this.state.city} onChange={this.handleChange}>
                            <option value="stavropol">Ставрополь</option>
                            <option value="moscow">Москва</option>
                            <option value="london">Лондон</option>
                            <option value="paris">Париж</option>
                        </select>
                    </label>
                </form>
                <br></br><br></br> 
            <button onClick = { 
                async () => {
                await this.buttonGetWeather();
                }
            }> Температура </button><br></br><br></br><br></br><br></br>
           {this.graphDraw()}
        </div>
        );
    }
}  

class WeatherWind extends Component 
{
    constructor(){
        super();
        this.state = {city: 'stavropol',
            dataWeather: [{name : "0", windSpeed : 15},{name : "1", windSpeed : 15}]
        };
        this.handleChange = this.handleChange.bind(this);
  
    }

    handleChange(event) {
        this.setState({city: event.target.value});
    }


    async buttonGetWeather() {
        this.setState({dataWeather : await getWeatherWind(this.state.city),  })
    }
    graphDraw(){
         return(
            <div>
                <LineChart width={1100} height={300} data={this.state.dataWeather}  
                    margin={ { top: 5, right: 30, left: 20, bottom: 5, percent : 10} }>
                    <XAxis dataKey="name" stroke="#000" position="insideBottom"/>
                    <YAxis  unit = "м/с" dataKey="windSpeed" stroke="#000"/>
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#eee"/>
                    <Line type="monotone" name = "Скорость ветра" dataKey="windSpeed" stroke="#12b202" activeDot={{ r: 8 }}/>
                </LineChart>
            </div> 
        )   
    }
    render() {
        
        return (
            <div>
                <form>
                    <label>
                        Выберите населенный пункт: <br></br><br></br>  
                        <select value={this.state.city} onChange={this.handleChange}>
                            <option value="stavropol">Ставрополь</option>
                            <option value="moscow">Москва</option>
                            <option value="london">Лондон</option>
                            <option value="paris">Париж</option>
                        </select>
                    </label>
                </form>
                <br></br><br></br> 
            <button onClick = { 
                async () => {
                await this.buttonGetWeather();
                }
            }> Скорость ветра </button><br></br><br></br><br></br><br></br>
           {this.graphDraw()}
        </div>
        );
    }
} 

class Weather extends Component 
{
    constructor(){
        super();
        this.state = {city: 'stavropol',
            dataWeather: []
        };
        this.handleChange = this.handleChange.bind(this);
  
    }

    handleChange(event) {
        this.setState({city: event.target.value});
    }


    async buttonGetWeather() {
        this.setState({dataWeather : await getWeather(this.state.city),  })
    }
    weatherDraw(props){
        const array = this.state.dataWeather;
         return(
            <ul>
                {
                array.map((item) => {
                return <ul>
                    <ListItem value={`время - ${item.name} погода ${item.weather}`}/> 
                        <img src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}  width="40" height="40"/>
                    </ul>
                }
                )}
            </ul>
        )
        
    }
    
    render() {
        
        return (
            <div>
                <form>
                    <label>
                        Выберите населенный пункт: <br></br><br></br>  
                        <select value={this.state.city} onChange={this.handleChange}>
                            <option value="stavropol">Ставрополь</option>
                            <option value="moscow">Москва</option>
                            <option value="london">Лондон</option>
                            <option value="paris">Париж</option>
                        </select>
                    </label>
                </form>
                <br></br><br></br> 
            <button onClick = { 
                async () => {
                await this.buttonGetWeather();
                }
            }> Погода </button><br></br><br></br><br></br><br></br>
           {this.weatherDraw()}
        </div>
        );
    }
} 

export {WeatherTemperature, WeatherWind, Weather};
