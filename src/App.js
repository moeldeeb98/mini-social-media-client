import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';



import Homepage from './components/Homepage.component'
import Login from './components/Login.component'
import Register from './components/Register.component'
import PageNotFound from './components/NotFound.component'
function App() {
  return (
    <Router>
      <Switch>

        {/* 
        
          create the routes for application
          
        */}
        <Route
          exact
          path='/'
          render={(props) =>
            localStorage.getItem('token') ? (
              window.location.href = '/homepage'
            ) : (
              window.location.href = '/login'
            )
          }
        ></Route>
        <Route
          exact
          path='/homepage'
          render={(props) =>
              localStorage.getItem('token')?(
              <Homepage {...props}/>
            ) : (
              window.location.href = '/login'
            )
          }
        ></Route>
        <Route
          exact
          path='/timeline'
          render={(props) =>
              localStorage.getItem('token')?(
              <Homepage {...props}/>
            ) : (
              window.location.href = '/login'
            )
          }
        ></Route>
        <Route
          exact
          path='/login'
          render={(props) =>
              localStorage.getItem('token')?(
                window.location.href = '/homepage'
            ) : (
              <Login {...props} />
            )
          }
        ></Route>
        <Route
          exact
          path='/register'
          render={(props) =>
              localStorage.getItem('token')?(
                window.location.href = '/homepage'
            ) : (
              <Register {...props} />
            )
          }
        ></Route>

          <Route component={PageNotFound} ></Route>

      </Switch>
    </Router>
  );
}

export default App;
