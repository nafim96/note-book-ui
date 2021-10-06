import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
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


function App ()
{
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
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
          </Switch>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
