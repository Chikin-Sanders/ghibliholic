import React from 'react'
import Kaonashi from '../images/kaonashi.png'
import Totoro from '../images/totoro.png'
import MaterializeCSS from '../images/logo/materializecss.svg'
import TMDB from '../images/logo/tmdb.svg'

function About() {
    return (
        <div className="container orange-text text-darken-2">
            <h4>About the page</h4>
            <hr/>
            <div className="row black-text" style={{textAlign: 'justify'}}>
                <div className="col s12 l7">
                    <p>I create this page to implement and improve my skill of Front End Developer. 
                        After join digital talent scholarship I want to learn more about Web Development 
                        and decided to build my career around it. The purpose of creating this site is I am using React.js and
                        consuming third party API for all films database. By building this site I learn a lot about React.js, 
                        how it capabilities and using both class component and functional component.
                        I use API from two websites, first one is ghibliapi for all Ghibli film detail database 
                        and second one is from themoviedatabase to access the image database.
                        I am using MaterializeCSS for the CSS Framework as I try to explore material UI outside of bootstrap.
                        I upload all the code on my repository click Kaonashi image to go to the repository.
                        </p>
                </div>
                <div className="col s12 l4 offset-l1 center">
                    <br/>
                    <a href="https://github.com/Chikin-Sanders/ghibliholic" target="_blank" rel="noreferrer noopener">
                        <img src={Kaonashi} alt="kaonashi" height='250'/>
                    </a>
                </div>
            </div>
            <h4>MaterializeCSS</h4>
            <hr/>
            <div className="row black-text" style={{ textAlign: 'justify' }}>
                <div className="col s12 l7">
                    <p>
                        Created and designed by Google, Material Design is a design language that combines 
                        the classic principles of successful design along with innovation and technology.
                        I choose this framework because I want to explore this framework. 
                        I think this framework has beautiful design and clean look. 
                        Click the logo to go to their page. 
                    </p>
                </div>
                <div className="col s12 l4 offset-l1 center">
                    <br/>
                    <a href="https://materializecss.com/" target="_blank" rel="noreferrer noopener">
                        <img src={MaterializeCSS} alt="MaterializeCSS" />
                    </a>
                </div>
            </div>
            <h4>Ghibli API</h4>
            <hr/>
            <div className="row black-text">
                <div className="col s12 l7">
                    <p>
                        When I want to create this project first I look for the avaiable API 
                        on the <a href="https://github.com/public-apis/public-apis" target="_blank" rel="noreferrer noopener">public API github</a> then I found Ghibli API.
                        As a film enthusiast I adore the Ghibli film particularly "My Neighbor Totoro" and many people also refer as Ghibli Magic. 
                        So, the idea of creating the website to explore other magical film is very tempting.
                    </p>
                </div>
                <div className="col s12 l4 offset-l1 center">
                    <br/>
                    <a href="https://ghibliapi.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                    <img src={Totoro} alt="totoro" height="250" />
                    </a>
                </div>
            </div>
            <h4>The Movie Database</h4>
            <hr/>
            <div className="row black-text">
                <div className="col s12 l7">
                    <p>
                        The problem I face when using the ghibli API was no API address for image related to the film 
                        so, my friend recomended me to use the movie database. The movie database is very great overall.
                        They have a lot of documentation related to any kind of film and the API is very easy to use.
                        All you need to do is creating the account on the web and search for the API link on the footer. 
                        The other good thing is the account also allow you to make contribution by rating and review any the film.
                    </p>
                </div>
                <div className="col s12 l4 offset-l1 center">
                    <br/>
                    <a href="https://www.themoviedb.org" target="_blank" rel="noreferrer noopener">
                        <img src={TMDB} alt="MaterializeCSS" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About
