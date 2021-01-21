import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="center row orange accent-4 grey-text text-darken-4" style={{padding: '30px 0', marginTop: 120}}>
            <div className="container">
                <div className="col s6 left-align">
                    <h5>Powered by:</h5>
                    <br/>
                    <a href='https://www.themoviedb.org/' target="_blank" rel="noreferrer noopener">
                        <h6 style={{ textDecoration: 'none' }}>The Movie Database</h6>
                    </a>
                    <a href='https://materializecss.com/' target="_blank" rel="noreferrer noopener">MaterializeCSS</a>
                </div>
                <div className="col s6 left-align">

                </div>
            </div>
        </div>
    )
}

export default Footer
