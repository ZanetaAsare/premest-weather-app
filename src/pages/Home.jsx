import React, {useEffect, useState, useContext} from 'react';
import '../styles/home.css';
import axios from 'axios';
import weatherIcon from '../assets/img/weather-icon.png';
import weatherIcon1 from '../assets/img/weather-icon1.png';
import weatherIcon2 from '../assets/img/weather-icon2.png';
import weatherIcon3 from '../assets/img/weather-icon3.png';
import weatherIcon4 from '../assets/img/weather-icon4.png';
import weatherIcon5 from '../assets/img/weather-icon5.png';
import weatherIcon6 from '../assets/img/weather-icon6.png';
import weatherIcon7 from '../assets/img/weather-icon7.png';
import Loader from '../components/Loader';
import { AppContext } from '../App';

const APP_ID = '0474653fe0c62e70c9b16c7b1f8f0542';

function Home(){
    const [coords, setCoords] = useState({});
    const [weatherData, setWeatherData] = useState({});

    const app_context = useContext(AppContext);
    

    const getCurrentWeather = () => {
        app_context.setIsLoading(true)
        if (coords.latitude !== undefined) {
                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${APP_ID}`).then((response) => {
                setWeatherData(response.data);
                console.log('Weather Report', response.data.main);
                app_context.setIsLoading(false)
            }).catch((error) => {
                console.log(error)
                app_context.setIsLoading(false)
            })
    } else{
        console.log('End here')
    }
        
    };

    useEffect(() =>{
        app_context.setIsLoading(true)
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log('coordinates are:', position.coords);
            setCoords(position.coords);
            getCurrentWeather();
            app_context.setIsLoading(false);
        }, (error)=>{
            console.log('This is your error:', error)
            app_context.setIsLoading(false);
        })
    }, [])

    // console.log('coords are: ', coords);
    // console.log('weather data: ', weatherData);


    return(
        app_context.isLoading ? <Loader /> : (
        <div className='container'>
            <div className="content">
                <div className="left">
                    <h3>Fri, 27<br/> November</h3>
                    <div className="currentWeatherInfo">
                        <p className="temp">-10&deg;</p>
                        <img src={weatherIcon} alt='Weather Icon'/>
                        {/* <p className='description'>Cloudy with little rain drops</p> */}
                    </div>
                    <p className="description">Description: {weatherData.weather ? weatherData.weather[0].description : ""}</p>
                    <div className="weekWeatherInfo">
                        <div className="weather-info">
                            <h5>MON</h5>
                            <img src={weatherIcon1} alt='Weather Info 1'/>
                            <p>12&deg;</p>
                        </div>
                        <div className="weather-info">
                            <h5>TUE</h5>
                            <img src={weatherIcon2} alt='Weather Info 2'/>
                            <p>12&deg;</p>
                        </div>
                        <div className="weather-info">
                            <h5>WED</h5>
                            <img src={weatherIcon3} alt='Weather Info 3'/>
                            <p>12&deg;</p>
                        </div>
                        <div className="weather-info">
                            <h5>THU</h5>
                            <img src={weatherIcon4} alt='Weather Info 4'/>
                            <p>12&deg;</p>
                        </div>
                        <div className="weather-info">
                            <h5>FRI</h5>
                            <img src={weatherIcon5} alt='Weather Info 5'/>
                            <p>12&deg;</p>
                        </div>
                        
                    </div>
                </div>
                <div className="right"></div>
            </div>                  
        </div>
        )
    )
}
export default Home;