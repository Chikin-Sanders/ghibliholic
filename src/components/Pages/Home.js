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
            <div className="center" style={{margin: '30px 0', padding: 30}}>
                <img src={totoro} alt="totoro" height="400"/>
                <br/>
                <br/>
                <Link to='/movies' className="hoverable waves-effect waves-light btn-large orange accent-4 grey-text text-darken-3">
                    <h5 className="white-text">Find out other great films</h5>
                </Link>
            </div>
            <hr className="container" style={{ border: '1px solid grey', borderRadius: 5 }} />
        </div>
    )
}

export default Home
