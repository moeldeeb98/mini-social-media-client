import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom';



// import Navbar from './components/Navbar.component'
import Homepage from './components/Homepage.component'
import Login from './components/Login.component'
import Register from './components/Register.component'
import Profile from './components/Profile.component'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path="/homepage" component={Homepage}></Route>
        <Route exact path="/timeline" component={Homepage}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/profile" component={Profile}></Route>
      </Switch>
    </Router>
  );
}

export default App;
