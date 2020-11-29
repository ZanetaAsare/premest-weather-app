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
                <button>Sign Up</button>
            </form>
            
        </div>
    )
}


export default Signup;