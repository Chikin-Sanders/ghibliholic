import React, { Component } from 'react'

class Footer extends Component {
    state = {
        resources: [
            { web: 'MaterializeCSS', src: 'https://materializecss.com/'},
            { web: 'Ghibli API', src: 'https://ghibliapi.herokuapp.com/'},
            { web: 'The Movie Database', src: 'https://www.themoviedb.org/'},
            { web: 'React.js', src: 'https://reactjs.org/'},
        ]
    }
    render() {
        const linkStyles = 'grey-text text-darken-4'
        return (
        <div className="center row blue-grey lighten-3 grey-text text-darken-4" style={{padding: '30px 0', marginTop: 100, marginBottom: 0}}>
            <div className="container left-align">
                <h4>Resources:</h4>
                <br/>
                {
                    this.state.resources.map(resource => {
                        return(
                            <a href={resource.src} target="_blank" rel="noreferrer noopener" className={linkStyles}>
                                <h6>{resource.web}</h6>
                            </a>
                        )
                    })
                }
            </div>
        </div>
        )
    }
}
export default Footer
