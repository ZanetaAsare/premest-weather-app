<<<<<<< HEAD
import React from 'react';
import '../styles/auth.css';    

function Login(){
    return(
        <div className='auth-container'>
            <h1>Login</h1>
            <form className='auth'>
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <button>Login</button>
            </form>
        </div>
=======
import React, {useState, createContext} from 'react';
import '../styles/auth.css';    

export const UserContext = createContext();

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameOnChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordOnChange = (e) => {
        setPassword(e.target.value)
    }

    const handleFormOnSubmit = (e) => {
        e.preventDefault()
        
        if(username in localStorage){
            let info = JSON.parse(localStorage.getItem(`${username}`))
            
            if (info['password'] === password){
                sessionStorage.setItem(`${username}`, true)
                alert('Login Successful')

            }else{
                console.log('Invalid login')
            }
        }else{
            console.log('Invalid login')
        }
    }
    console.log(username)
    return(
        <UserContext.Provider value={{username}}>
        <div className='auth-container'>
            <h1>Login</h1>
            <form className='auth' onSubmit={handleFormOnSubmit}>
                <input type='text' placeholder='Username' value={username} onChange={handleUsernameOnChange}/>
                <input type='password' placeholder='Password' value={password} onChange={handlePasswordOnChange} />
                <button>Login</button>
            </form>
        </div>
        </UserContext.Provider>
>>>>>>> 65f6e3a (Added login and signup functionality, further styling)
    )
}

export default Login;

