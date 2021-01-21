import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../layouts/Carousel'
import HighRated from './HighRated'
import Totoro from '../images/totoro-walking.png'
import RadishSpirit from '../images/radish-spirit.png'

const breakStyle = {
    border: '1px solid grey',
    borderRadius: 5
}

const divStyles = {
    margin: '25px 0',
    padding: 20
}
const textStyles = {
    textAlign: 'justify' 
}

function Home() {
    return (
        <div className="grey-text text-darken-4">
            <Carousel />
            <hr className="container" style={{ border: '1px solid grey', borderRadius: 5, marginTop: 50 }} />
            <div className="row">
                <div className="col s12 center" style={{ padding: 30 }}>
                    <HighRated />
                </div>
            </div>
            <hr className="container" style={ breakStyle } />
            <div className="center" style={divStyles}>
                <div className="row container">
                    <div className="col s6">
                        <div className="row">
                            <h5 className="col s12 right-align orange-text">Films</h5>
                        </div>
                        <h6 style={textStyles}>
                            Studio Ghibli is world respected studio animation. 
                            By watching the film you will see the magic they created for you.
                        </h6>
                        <br/>
                        <br/>
                        <Link to='/films' className="hoverable right waves-effect waves-light btn-small orange accent-4 white-text">
                            Find out more
                        </Link>
                    </div>
                    <div className="col s6">
                    <img src={Totoro} alt="totoro" height="210"/>
                    </div>
                </div>
            </div>
            <hr className="container" style={ breakStyle } />
            <div className="center" style={divStyles}>
                <div className="row container">
                    <div className="col s6">
                        <img src={RadishSpirit} alt="radish-spirit" height='210'/>
                    </div>
                    <div className="col s6">
                        <div className="row">
                            <h5 className="col s12 left-align orange-text">About the page</h5>
                        </div>
                        <h6 style={textStyles}>
                            The page is build in React.js and using third party API provided by ghibliapi and The Movie Database.
                            I created this page to learn how to using React.js and using API from other source. I using MaterializeCSS for the UI elements.
                        </h6>
                        <br/>
                        <Link to='/about' className="hoverable left waves-effect waves-light btn-small orange accent-4 white-text">
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
