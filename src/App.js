import React, {useState} from 'react';
import './styles/App.css';
import {Route, Switch, Link} from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Search from './pages/Search'

export const AppContext = React.createContext();

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppContext.Provider value={{isLoading, setIsLoading}}>
    <div className='App'>
      
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
