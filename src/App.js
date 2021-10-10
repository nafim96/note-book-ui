import React, { useContext, useState } from 'react';
import Navbar from "./Components/shared/Navbar/Navbar";
import
{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/HomeScreen/Home/Home';
import About from './Components/HomeScreen/About/About';
import NoteState from './context/Notes/NoteState';
import Profile from './Components/HomeScreen/Profile/Profile';
import Alert from './Components/shared/Alert/Alert';
import Dashboard from './Components/dashboard/Dashboard/Dashboard';
import Login from './Components/AccountManager/Login/Login';
import Signup from './Components/AccountManager/Signup/Signup';
import { NoteContext } from './context/Notes/NoteContext';

function App ()
{
  const [ alert, setAlert ] = useState( null );
  // const context = useContext( NoteContext );
  // const { viewAlert, setViewAlert } = context;

  const showAlert = ( message, type ) =>
  {
    setAlert( {
      msg: message,
      type
    } );

    setTimeout( () =>
    {
      setAlert( null );
    }, 3000 );
  };
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={ alert } />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/home">
                <Home showAlert={ showAlert } />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <Route exact path="/login">
                <Login showAlert={ showAlert } />
              </Route>
              <Route exact path="/signup">
                <Signup showAlert={ showAlert } />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
