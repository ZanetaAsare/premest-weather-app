import React, {useState} from 'react';
import '../styles/auth.css';
import { Link, useHistory } from 'react-router-dom';

function Signup(){
    let redirect = useHistory();
    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userProfile, setUserProfile] = useState({})

    const handleUsernameOnChange = (e) => {
        setUsername(e.target.value)
    }

    const handleEmailOnChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordOnChange = (e) => {
        setPassword(e.target.value)
    }

    const handleFormOnSubmit = (e) => {
        e.preventDefault()
        userProfile['username'] = username
        userProfile['email'] = email
        userProfile['password'] = password
        localStorage.setItem(`${username}`, JSON.stringify(userProfile))
        console.log(localStorage)
        alert('Sign Up Successful')
        redirect.push('/login')
    }

    return(
        <div className='auth-container'>
            <h1>Sign Up</h1>
            <form className='auth' onSubmit={handleFormOnSubmit}>
                <input type='text' placeholder='Username' value={username} onChange={handleUsernameOnChange}/>
                <input type='email' placeholder='Email' value={email} onChange={handleEmailOnChange}/>
                <input type='password' placeholder='Password' value={password} onChange={handlePasswordOnChange}/>
                <button>Sign Up</button><br/><br/>
                <p>Already A User? <Link to='/login' id='auth-link'>Login</Link></p>
            </form>
            
        </div>
    )
}


export default Signup;