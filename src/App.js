import React, {useState} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Search from './pages/Search'
import History from './pages/History'
import 'bootstrap/dist/css/bootstrap.min.css';

export const AppContext = React.createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogoutOnClick = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    // sessionStorage.setItem('isLoggedIn', false)
    alert('Logout Successful')
  }

  

  return (

    <AppContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
    <div className='container'>
        <nav>
          <Link to='/' className="item-nav">Home</Link>
          <Link to='/search' className="item-nav">Search</Link>

          <div className='nav-right-wing'>
            <Link to='/signup' className="item-nav">Sign Up</Link>
            {isLoggedIn ? <span className="item-nav" onClick={handleLogoutOnClick}>Logout</span> : <Link to='/login' className="item-nav">Login</Link>}
          </div>
        </nav>
      <Switch>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/search'component={Search}/>
        <Route path='/history' component={History}/>
      </Switch>
    </div>
    
    </AppContext.Provider>
  );
}

export default App;
