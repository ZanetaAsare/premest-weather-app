import React, {useState, useContext} from 'react'
// import '../styles/auth.css'
import '../styles/home.css'
import axios from 'axios'
import { UserContext } from './Login';

const APP_ID = '0474653fe0c62e70c9b16c7b1f8f0542';



function Search(){
    const user_context = useContext(UserContext);
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResult, setSearchResult] = useState({})
    const [history, setHistory] = useState(localStorage.getItem("searchHistory") ? JSON.parse(localStorage.getItem("searchHistory")) : [])
   
    const handleSearchQueryOnChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const searchWeather = (e) => {
        e.preventDefault()
        const APP_URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&appid=${APP_ID}`
        axios.get(APP_URL)
        .then((response)=>{
            setSearchResult(response.data)
            console.log(response.data)
        }).catch((error)=>{
            console.log('herein lies your error:',error)
        })
        setWeatherHistory(searchQuery, searchResult);
    }

    const setWeatherHistory = (query, result) => {
        const newHistory = history

        if (newHistory.length < 5) {
            newHistory.push({
                query: query,
                result: result
            })
        } else{
            newHistory.shift()
            newHistory.push({
                query: query,
                result: result
            })
        }
        localStorage.setItem("searchHistory", JSON.stringify(newHistory))
        console.log(JSON.parse(localStorage.getItem('searchHistory')))
    }

    return(
        <div className='container'>
                <div className='auth-container'>
                    <form className='auth' onSubmit={searchWeather}>
                        <input type='text' placeholder='Enter City' value={searchQuery} onChange={handleSearchQueryOnChange} />
                        <button>Search</button>
                    </form>
                    <h2>Weather Info</h2>
                    <p>{searchResult.weather ? searchResult.weather[0].description : ""}</p>

                    {/* {sessionStorage.getItem(`${user_context.username}`) ? (
                        <p>Weather History</p>
                    ) : ''} */}
                    {/* <h2>Search History</h2>
                    <ul>
                        {
                            history.map((item)=>(
                                <p>{searchQuery.weather ? searchQuery.weather[0].description : ""}</p>
                            ))
                        }
                    </ul> */}
                </div>
        </div>
    )
}

export default Search;