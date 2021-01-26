import React, { Component } from 'react'
import axios from 'axios'
import CardImages from '../element/CardImages'

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
                    <div className="card col l4 s12" key={film.id}>
                        <div className="card-image waves-effect waves-block waves-light" style={{ margin: '-15px -10px' }}>
                            <CardImages film={film} height={500} />
                        </div>
                        <div className="card-reveal grey-text text-darken-3">
                            <span className="card-title">
                                <h5 className="col s10 left-align">{film.title}</h5>
                                <i className="material-icons col s2 right-align">close</i>
                            </span>
                            <div className="row left" style={{ textAlign: 'justify' }}>
                                <br/>
                                <p>Director : {film.director} </p>
                                <p>Producer : {film.producer} </p>
                                <p>Year : {film.release_date}</p>
                                <p>Rating : <span><i className="material-icons yellow-text text-darken-2">star</i></span>{film.rt_score}</p>
                                <p>{film.description}</p>
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
                <h4 style={{ margin: '25px 0px 50px' }} className="orange-text">HIGHLY RATED FILMS</h4>
               <div className="row">
               {bestFilms}
               </div>
            </div>
        )
    }
}

export default HighRated
