<<<<<<< HEAD
import React from 'react';
import '../styles/auth.css';

function Signup(){
    return(
        <div className='auth-container'>
            <h1>Signup</h1>
            <form className='auth'>
                <input type='text' placeholder='First Name'/>
                <input type='text' placeholder='Last Name' />
                <input type='text' placeholder='Username' />
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
=======
import React, {useState} from 'react';
import '../styles/auth.css';

function Signup(){
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
    }

    return(
        <div className='auth-container'>
            <h1>Signup</h1>
            <form className='auth' onSubmit={handleFormOnSubmit}>
                <input type='text' placeholder='Username' value={username} onChange={handleUsernameOnChange}/>
                <input type='email' placeholder='Email' value={email} onChange={handleEmailOnChange}/>
                <input type='password' placeholder='Password' value={password} onChange={handlePasswordOnChange}/>
>>>>>>> 65f6e3a (Added login and signup functionality, further styling)
                <button>Sign Up</button>
            </form>
            
        </div>
    )
}


export default Signup;