import React, { Component } from 'react'
import axios from 'axios'
import CardImages from '../element/CardImages'
import CardDetails from '../element/CardDetails'

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
        const bestFilms = bestFilmsList.length ? (
            bestFilmsList.map(film => {
                return (
                    <div className="col l6 s12" key={film.id} >
                        <div className="card large blue-grey lighten-5" style={{ borderRadius: '3%', padding: 0 }}>
                            <div className="card-content">
                                <div className="row">
                                    <div className="col s6">
                                    <CardImages filmDetails={film}/>
                                    </div>
                                    <div className="col s6">
                                    <CardDetails filmDetails={film} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div><div className="gap-patch">
                            <div className="circle"></div>
                        </div><div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
        )
        return (
            <div>
                <h4 style={{ margin: '25px 0px 50px' }} >HIGHLY RATED MOVIES</h4>
               <div className="row">
               {bestFilms}
               </div>
            </div>
        )
    }
}

export default HighRated
