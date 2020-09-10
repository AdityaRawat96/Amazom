import React, {useEffect} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Checkout from "./Components/Checkout/Checkout";
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Components/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once the app component loads..
    
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //user just loggedIn / The user was logged 
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        //The user is logged 
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    })
  }, [])

  return (
    //BEM convention
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
