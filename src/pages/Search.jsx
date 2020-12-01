import React, {useState} from 'react'
// import '../styles/auth.css'
import '../styles/home.css'
import axios from 'axios'

const APP_ID = '0474653fe0c62e70c9b16c7b1f8f0542';

function Search(){
    const [searchQuery, setSearchQuery] = useState('')

    const searchWeather = (e) => {
        e.preventDefault()
        const APP_URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${APP_ID}`
        axios.get(APP_URL)
        .then((response)=>{
            setSearchQuery(response.data)
            console.log(response.data)
        }).catch((error)=>{
            console.log(error)
        })

    }

    return(
        <div className='container'>
            <div className="content">
                <div className="left">
                    <div className='auth-container'>
                        <form className='auth' onSubmit={searchWeather}>
                            <input type='text' placeholder='Enter City' value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}} />
                            <button>Search</button>
                        </form>
                    </div>
                </div>
                <div className="right"></div>
            </div>
        </div>   
    )
}

export default Search;