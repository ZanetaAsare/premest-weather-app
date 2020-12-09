import React, {useState} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Search from './pages/Search'
import 'bootstrap/dist/css/bootstrap.min.css';

export const AppContext = React.createContext();

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppContext.Provider value={{isLoading, setIsLoading}}>

    <div className='container'>
        <nav>
          <Link to='/' className="item-nav">Home</Link>
          <Link to='/search' className="item-nav">Search</Link>

          <div className='nav-right-wing'>
            <Link to='/login' className="item-nav">Login</Link>
            <Link to='/signup' className="item-nav">Sign Up</Link>
          </div>
        </nav>
      <Switch>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/search'component={Search}/>
      </Switch>
    </div>
    
    </AppContext.Provider>
  );
}

export default App;
