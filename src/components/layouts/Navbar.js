import React from 'react'
import { NavLink } from 'react-router-dom'
import M from 'materialize-css'

function Navbar() {
    function refreshPage() {
        window.location.href ='/ghibliholic/'
    }

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
    });

    return (
        <div>
        <nav className="nav-extended">
            <nav className="nav-wrapper orange accent-4">
                <div className="container">
                    <a href="/ghibliholic/" className="brand-logo">Ghibliholic</a>
                    <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to='/ghibliholic/' onClick={() => {refreshPage()}} >Home</NavLink></li>
                        <li><NavLink to='/ghibliholic/films'>Films</NavLink></li>
                        <li><NavLink to='/ghibliholic/about'>About</NavLink></li>
                    </ul>
                </div>
            </nav>
        </nav>

        <ul className="sidenav" id="mobile-demo">
            <li><NavLink to='/ghibliholic/' onClick={() => { refreshPage() }} >Home</NavLink></li>
            <li><NavLink to='/ghibliholic/films'>Films</NavLink></li>
            <li><NavLink to='/ghibliholic/about'>About</NavLink></li>
        </ul>
        </div>
    )
}

export default Navbar
