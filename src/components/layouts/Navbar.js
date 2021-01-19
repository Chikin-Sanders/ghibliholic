import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="nav-wrapper orange darken-3">
            <div className="container">
                <a href="/" className="brand-logo">Ghibliholic</a>
                <ul className="right">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/movies'>Movies</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
