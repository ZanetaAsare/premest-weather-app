import React, {useState, useContext} from 'react';
import '../styles/auth.css';    
import { Link, useHistory } from 'react-router-dom';
import { AppContext } from '../App.js'



function Login(){
    const app_context = useContext(AppContext)
    let redirect = useHistory();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleUsernameOnChange = (e) => {
        setUsername(e.target.value)
        // app_context.setUsername(e.target.value)
    }

    const handlePasswordOnChange = (e) => {
        setPassword(e.target.value)
    }

    const handleFormOnSubmit = (e) => {
        e.preventDefault()
        
        if(username in localStorage){
            let info = JSON.parse(localStorage.getItem(`${username}`))
            
            if (info['password'] === password){
                // sessionStorage.setItem('isLoggedIn', true)
                app_context.setIsLoggedIn(true)
                alert('Login Successful')
                setUsername('')
                setPassword('')
                redirect.push('/search')

            }else{
                alert('Invalid Login')
                console.log('Invalid login')
            }
        }else{
            alert('Invalid Login')
            console.log('Invalid login')
        }
    }
 
    return(
    
        <div className='auth-container'>
            <h1>Login</h1>
            <form className='auth' onSubmit={handleFormOnSubmit}>
                <input type='text' placeholder='Username' value={username} onChange={handleUsernameOnChange}/>
                <input type='password' placeholder='Password' value={password} onChange={handlePasswordOnChange} />
                <button>Login</button><br/><br/>
                <p>Don't Have An Account? <Link to='/signup' id='auth-link'>Sign Up</Link></p>
            </form>
        </div>
    )
}

export default Login;

