import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../layouts/Carousel'
import HighRated from './HighRated'
import totoro from '../images/totoro-walking.png'

const breakStyle = {
    border: '1px solid grey',
    borderRadius: 5
}
function Home() {
    return (
        <div className="grey-text text-darken-4">
            <Carousel />
            <div className="row" style={{marginTop: 50}}>
                <hr className="container" style={{ breakStyle }} />
                <div className="col s12 center" style={{ padding: 40 }}>
                    <HighRated />
                </div>
            </div>
            <hr className="container" style={{ breakStyle }} />
            <div className="center" style={{margin: '15px 0', padding: 30}}>
                <div className="row container">
                    <div className="col s6">
                        <h6 style={{ textAlign: 'justify' }}>
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
                    <img src={totoro} alt="totoro" height="210"/>
                    </div>
                </div>
            </div>
            <hr className="container" style={{ breakStyle }} />
            
        </div>
    )
}

export default Home
