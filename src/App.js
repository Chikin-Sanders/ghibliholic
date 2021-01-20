import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/layouts/Navbar'
import Home from './components/pages/Home'
import MoviesList from './components/pages/MoviesList'

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ backgroundColor: '#fbfdf2'}}>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={MoviesList} />
        </div>
      </Router>
    )
  }
}

export default App
