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
    )
}

export default Login;

