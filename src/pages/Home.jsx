import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {LocationIcon} from '@primer/octicons-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';
import { Link } from 'react-router-dom';

const APP_ID = '0474653fe0c62e70c9b16c7b1f8f0542';

function Home(){
    const [weatherData, setWeatherData] = useState({});

  


    const getCurrentWeather = (coords) => {
        if (coords.latitude !== undefined) {
                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&appid=${APP_ID}`)
                .then((response) => {
                setWeatherData(response.data);
             })
            .catch((error) => {
                console.log(error)
            })
    } else{
        console.log('End here')
    }
        
    };

    useEffect(() =>{
        navigator.geolocation.getCurrentPosition((position)=>{
        //    setCoords(position.coords);
           getCurrentWeather(position.coords);
        }, (error)=>{
            console.log('This is your error:', error)
        })
    }, []);     

  
    // console.log('coords are: ', coords);
    console.log('weather data: ', weatherData);

    let cd = new Date()
    let current_date = cd.toDateString()
    let current_time = cd.toLocaleTimeString();


    return(
        <div className='container'>
           <div className='row weather-home align-items-center'>
                <div className='col-6 weather-heading'>
                    <h1>THE WEATHER <br/>CHANNEL</h1>
                    <Link to='/signup'><button>Sign Up</button></Link>
                </div>
                <div className='col-6 weather-info'>
                    <h3>{current_date}</h3>
                    <h4>at {current_time}</h4>
                    <div className="currentWeatherInfo">
                        <p className="temp">{weatherData.main ? Math.round(weatherData.main.temp * 10) / 10 : ""}&deg;</p>
                        <img src={`http://openweathermap.org/img/wn/${weatherData.weather ? weatherData.weather[0].icon : '10d'}@2x.png`} alt='Weather Icon'/>
                    </div>
                    <LocationIcon size={24} />&nbsp;
                    <span>{weatherData.name ? weatherData.name : ''}, {weatherData.sys ? weatherData.sys.country : ''}</span>
                    <div className='weather-details row'>
                        <div className='col-5'>
                            <p>Description:</p>
                            <p>Humidity:</p>
                            <p>Pressure:</p>
                        </div>
                        <div className='col-7'>
                            <p>{weatherData.weather ? weatherData.weather[0].description : ""}</p>
                            <p>{weatherData.main ? weatherData.main.humidity : ""}%</p>
                            <p>{weatherData.main ? weatherData.main.pressure : ""}hPa</p>
                        </div>
                    </div>     
                </div>
           </div>
        </div>
        
    )
}
export default Home;