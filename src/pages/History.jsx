import React, {useState,useContext} from 'react'
import {LocationIcon} from '@primer/octicons-react'
import '../styles/auth.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css'
import { AppContext } from '../App';
import {Link} from 'react-router-dom';

function History(){
    const app_context = useContext(AppContext)

    const historyArray = JSON.parse(localStorage.getItem('searchHistoryy'))

    
    return(
        <div className='container'>
        <h1 id='history-title'>Search History</h1>

        {
        app_context.isLoggedIn ? 
                
            historyArray.map((item) => (

                <div className='row weather-home align-items-center'>
                
                <div className='col-6 weather-heading'>
                    <h1 id='city-name'>{Object.keys(item)[0]}</h1>
                </div>
                <div className='col-6 weather-info'>
                <h3>{item[Object.keys(item)[1]]} </h3>
                <h4>at {item[Object.keys(item)[2]]}</h4>

                    <div className="currentWeatherInfo">
                        <p className="temp">{item[Object.keys(item)[0]].main ? Math.round(item[Object.keys(item)[0]].main.temp * 10) / 10 : ""}&deg;</p>
                        <img src={`http://openweathermap.org/img/wn/${item[Object.keys(item)[0]].weather ? item[Object.keys(item)[0]].weather[0].icon : '10d'}@2x.png`} alt='Weather Icon'/>
                    </div>
                    <LocationIcon size={24} />&nbsp;
                    <span>{item[Object.keys(item)[0]].name ? item[Object.keys(item)[0]].name : ''}, {item[Object.keys(item)[0]].sys ? item[Object.keys(item)[0]].sys.country : ''}</span>
                    <div className='weather-details row'>
                        <div className='col-5'>
                            <p>Description:</p>
                            <p>Humidity:</p>
                            <p>Pressure:</p>
                        </div>
                        <div className='col-7'>
                            <p>{item[Object.keys(item)[0]].weather ? item[Object.keys(item)[0]].weather[0].description : ""}</p>
                            <p>{item[Object.keys(item)[0]].main ? item[Object.keys(item)[0]].main.humidity : ""}%</p>
                            <p>{item[Object.keys(item)[0]].main ? item[Object.keys(item)[0]].main.pressure : ""}hPa</p>
                        </div>
                    </div> 
                </div>
            </div>
            ))
             

            
        
        
        
        : 
        <div className='weather-heading'>
            <h2 id='history-title'>Login To View</h2>
            <br/><br/>
            <Link to='/login'><button>Login</button></Link>
        </div>
        }
         
        </div>
    )
}

export default History;
