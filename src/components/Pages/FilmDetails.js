import React, { useEffect, useState} from 'react'
import axios from 'axios'
import CardImages from '../element/CardImages'

function FilmDetails(props) {
    const [id] = useState(props.match.params.film_id)
    const [filmData, setFilmData] = useState([])

    useEffect(() => {
        const fetchFilm = async() => {
            const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${id}`)
            setFilmData(res.data)
        }
        fetchFilm()
    }, [id])
    
    if(filmData.length !== 0) {
        return (
            <div>
                <div className="container center">
                    <div className="row">
                    <a className="waves-effect btn-flat left" href="/ghibliholic/films/" >
                        <i className="material-icons">keyboard_arrow_left</i>
                    </a>
                    </div>
                    <div className="row">
                        <div className="col s12 l4">
                        <CardImages film={filmData} height={500} />
                        </div>
                        <div className="col s12 offset-l1 l7 left-align description">
                            <h2>{filmData.title}</h2>
                            <hr/>
                            <p>director &emsp; &emsp;: {filmData.director}</p>
                            <p>producer&emsp;&emsp;: {filmData.producer}</p>
                            <p>release&emsp;&emsp;&emsp;: {filmData.release_date}</p>
                            <p>rating &emsp;&emsp;&emsp; : <i class="material-icons yellow-text text-darken2">star</i>{filmData.rt_score}</p>
                            <hr/>
                            <p>description &emsp;:</p>
                            <p style={{textAlign: 'justify'}}>{filmData.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div>
                <div className="center valigned" >
                    <h4>loading</h4>
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
                </div >
            </div>
        )
    }
}

export default FilmDetails