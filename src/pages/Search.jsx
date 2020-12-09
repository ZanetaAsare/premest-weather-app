import React, {useState, useContext, useEffect} from 'react'
import {LocationIcon} from '@primer/octicons-react'
import '../styles/auth.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css'
import axios from 'axios'
import { AppContext } from '../App';
import { Link } from 'react-router-dom';



const APP_ID = '0474653fe0c62e70c9b16c7b1f8f0542';



function Search(){
    const app_context = useContext(AppContext);
    const [searchQuery, setSearchQuery] = useState('Accra')
    const [searchResult, setSearchResult] = useState({})
    const [weatherSearchHistory, setWeatherSearchHistory] = useState(localStorage.getItem("searchHistoryy") ? JSON.parse(localStorage.getItem("searchHistoryy")) : [])
   
    const handleSearchQueryOnChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const searchWeather = (e) => { 
        if (e) {
            e.preventDefault()
        } 
        const APP_URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&appid=${APP_ID}`
        axios.get(APP_URL)
        .then((response)=>{
            setSearchResult(response.data)
            setSearchQuery('')
        }).catch((error)=>{
            console.log('herein lies your error:',error)
            alert('Invalid input')
        })
        
}

    const setWeatherHistory = (query, result) => {
        const newHistory = weatherSearchHistory

        if (newHistory.length < 5) {
            newHistory.push({
                [`${query}`]: result
            })
        } else if (newHistory.length >= 5){
            newHistory.shift()
            newHistory.push({
                [`${query}`]: result,
                date: `${current_date}`,
                time: `${current_time}` 
            })
        }

        localStorage.setItem("searchHistoryy", JSON.stringify(newHistory))
        console.log(JSON.parse(localStorage.getItem('searchHistoryy')))
    }

    useEffect(() =>{
        searchWeather();
    }, []);

    // useEffect that runs upon update of searchResult
    useEffect(() =>{
        setWeatherHistory(searchQuery, searchResult);
    }, [searchResult]);

    let cd = new Date()
    let current_date = cd.toDateString()
    let current_time = cd.toLocaleTimeString();


    return(
        <div className='container'>
            <div className='row weather-home align-items-center'>
                <div className='col-6'>
                    <div className='auth-container'>
                        <form className='auth' onSubmit={searchWeather}>
                            <input type='text' placeholder='Enter City' value={searchQuery} onChange={handleSearchQueryOnChange} />
                            <button>Search</button>
                        </form> 
                        {app_context.isLoggedIn ? <p><Link to='/history' id='auth-link'>Search History</Link></p> : "Login to see search history"}
                    </div>
                    
                </div>
                <div className='col-6 weather-info'>
                    <h3>{current_date}</h3>
                    <h4>at {current_time}</h4>
                    <div className="currentWeatherInfo">
                        <p className="temp">{searchResult.main ? Math.round(searchResult.main.temp * 10) / 10 : ""}&deg;</p>
                        <img src={`http://openweathermap.org/img/wn/${searchResult.weather ? searchResult.weather[0].icon : '10d'}@2x.png`} alt='Weather Icon'/>
                    </div>
                    <LocationIcon size={24} />&nbsp;
                    <span>{searchResult.name ? searchResult.name : ''}, {searchResult.sys ? searchResult.sys.country : ''}</span>
                    <div className='weather-details row'>
                        <div className='col-5'>
                            <p>Description:</p>
                            <p>Humidity:</p>
                            <p>Pressure:</p>
                        </div>
                        <div className='col-7'>
                            <p>{searchResult.weather ? searchResult.weather[0].description : ""}</p>
                            <p>{searchResult.main ? searchResult.main.humidity : ""}%</p>
                            <p>{searchResult.main ? searchResult.main.pressure : ""}hPa</p>
                        </div>
                    </div> 
                </div>
            </div>
                
        </div>
    )
}

export default Search;