import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../layouts/Carousel'
import HighRated from './HighRated'
import totoro from '../images/totoro-walking.png'

function Home() {
    return (
        <div>
            <Carousel />
            <div className="row" style={{marginTop: 50}}>
                <hr className="container" style={{ border: '1px solid grey', borderRadius: 5}} />
                <div className="col s12 center" style={{ padding: 40 }}>
                    <HighRated />
                </div>
            </div>
            <hr className="container" style={{ border: '1px solid grey', borderRadius: 5 }} />
            <div className="center" style={{margin: '50px 0'}}>
                <img src={totoro} alt="totoro" height="400"/>
                <h4 className="grey-text text-darken-4">Find out other great movies</h4>
                <Link to='/movies' className="waves-effect waves-light btn-large orange accent-4 grey-text text-darken-3">
                    <h5 className="white-text">SEE ALL</h5>
                </Link>
            </div>
            <hr className="container" style={{ border: '1px solid grey', borderRadius: 5 }} />
        </div>
    )
}

export default Home
