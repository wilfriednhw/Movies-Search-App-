import React from 'react';
import './App.css';
import Header from './Header/Header';
import DetailsMovie from './Movie/DetailsMovie';
import MoviesList from './Movie/MoviesList';
import Footer from './Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="">
      <Header />
      <Footer />
      <Router>
        <Switch>
          <Route exact path="/">
            <MoviesList />
          </Route>
          <Route exact path="/details/:id">
            <DetailsMovie />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
