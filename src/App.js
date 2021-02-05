import React, { Component } from "react";
import './App.css';
import {fetchData} from './utils/Api'
import {parsToTemperature} from './utils/Tools'
import {
  XAxis,
  YAxis,
  LineChart,
  CartesianGrid,
  Line,
  Legend,
  Tooltip
} from "recharts";

const getWeather = async (city) =>  await parsToTemperature(await fetchData(city));

class Weather extends Component 
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
        this.setState({dataWeather : await getWeather(this.state.city),  })
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
                    <Line type="monotone" dataKey="temperature" stroke="#12b202" activeDot={{ r: 8 }}/>
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
            }> Получить погоду </button><br></br><br></br><br></br><br></br>
           {this.graphDraw()}
        </div>
        );
    }
}   

export {Weather};
