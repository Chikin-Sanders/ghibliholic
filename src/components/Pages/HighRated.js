import React, { Component } from 'react'
import axios from 'axios'

export class HighRated extends Component {
    state = {
        films: []
    }
    componentDidMount() {
        axios.get('https://ghibliapi.herokuapp.com/films')
        .then((result) => {
          this.setState({
              films: result.data
          })
        })
    }

    render() {
        const {films} = this.state
        const bestFilmsList = films.sort((a, b) => b.rt_score - a.rt_score).slice(0, 6)
        console.log(bestFilmsList)
        return (
            <div>
                <h4 style={{ margin: '30px 0px' }}>Highly Rated movies</h4>
               <div className="row" >
               {
                   bestFilmsList.map( film => {
                       return(
                           <div className="col s12 m4" key={film.id}>
                                <div className="card small">
                                    <div className="card-content">
                                        <div className="row">
                                        <span className="card-title">
                                            <h6 className="col s6" style={{fontWeight: 'bold'}}>{film.title}</h6>
                                            <span className="col s6">{film.rt_score}</span>
                                        </span>
                                        </div>
                                        <hr/>
                                       <div className="row left-align" style={{overflow: 'auto'}}>
                                        <p>{film.description}</p>
                                        </div>
                                    </div>
                                </div>
                           </div>
                       )
                    })
                }
               </div>
            </div>
        )
    }
}

export default HighRated
