import React from 'react'
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
        </div>
    )
}

export default Home
