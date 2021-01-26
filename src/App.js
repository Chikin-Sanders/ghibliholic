import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/layouts/Navbar'
import Home from './components/pages/Home'
import FilmList from './components/pages/FilmList'
import About from './components/pages/About'
import Footer from './components/pages/Footer'

export class App extends Component {
  render() {
    return (
      <Router>
          <div className="App" style={{ backgroundColor: '#fbfdf2'}}>
            <Navbar />
            <Route path="/ghibliholic/" exact component={Home} />
            <Route path="/ghibliholic/films" exact component={FilmList} />
            <Route path="/ghibliholic/about" exact component={About} />
            <Footer />  
          </div>
      </Router>
    )
  }
}

export default App
