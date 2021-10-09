import React from 'react';
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

function App ()
{
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="hello" />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/home">
                <Home />
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
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
