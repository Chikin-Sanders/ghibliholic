import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    function refreshPage() {
        window.location.href='/'
    }
    return (
        <nav className="nav-wrapper orange accent-4">
            <div className="container">
                <a href="/" className="brand-logo">Ghibliholic</a>
                <ul className="right">
                    <li><NavLink to='/' onClick={() => {refreshPage()}} >Home</NavLink></li>
                    <li><NavLink to='/films'>Films</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
