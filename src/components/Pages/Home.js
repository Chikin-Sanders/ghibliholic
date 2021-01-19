import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../layouts/Carousel'
import HighRated from './HighRated'

function Home() {
    return (
        <div>
            <Carousel />
            <div className="row" style={{marginTop: 50}}>
                <hr className="container" style={{ border: '1px solid grey', borderRadius: 5}} />
                <div className="col s12 center">
                    <HighRated />
                </div>
            </div>
            <hr className="container" style={{ border: '1px solid grey', borderRadius: 5 }} />
            <div className="center">
                <Link to='/movies' className="waves-effect waves-light btn-large orange accent-4 grey-text text-darken-3">
                    <h5>SEE ALL</h5>
                </Link>
            </div>
        </div>
    )
}

export default Home
