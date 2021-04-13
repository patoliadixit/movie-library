import React, { useState, useEffect } from 'react'
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import MovieFullPage from './components/MovieFullPage'
import Header from './components/Header'
import SearchPage from './components/SearchPage'
import Results from './components/Results'
function App() {
  return (
    <>
      <Router >
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movie/:id">
            <MovieFullPage />
          </Route>
          <Route exact path="/genre/:genre/">
            <Results />
          </Route>
          <Route exact path="/search/:query">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
