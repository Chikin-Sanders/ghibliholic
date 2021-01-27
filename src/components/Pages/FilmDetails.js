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
            <div style={{ backgroundImage: 'https://www.denofgeek.com/wp-content/uploads/2018/04/grave-main.jpg?resize=768%2C432'}}>
                <div className="container center">
                    <a className="waves-effect waves-orange btn-flat left" href="/ghibliholic/films/" >
                        <i className="material-icons">keyboard_arrow_left</i>
                    </a>
                    <CardImages film={filmData} height={500} />
                </div>
            </div>
        )
    } else {
        return(
            <div>
                <div className="center valigned" >
                    <h2>loading</h2>
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