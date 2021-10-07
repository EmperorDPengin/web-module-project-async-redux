import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import WelcomePage from './components/WelcomePage/WelcomePage';
import AnimeList from './components/AnimeList/AnimeList';
import MangaList from './components/MangaList/MangaList';

function App() {
  
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/anime">
          <AnimeList />
        </Route>
        <Route path="/manga">
          <MangaList />
        </Route>
        <Route path="/home">
          <WelcomePage />
        </Route> 
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
