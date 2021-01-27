import { React, useEffect, useState } from 'react'
import axios from 'axios'

function CardImages ({ film, height }) {
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    console.log('from cardImages.js the title is: '+film.title)

    useEffect(() => {
        const spaceToPlus = () => {
            const newTitle = []
            for (var count = 0; count < film.title.length; count++) {
                var char = film.title.charAt(count).toLowerCase()
                if (char === " ") {
                    newTitle.push("+")
                } else {
                    newTitle.push(char)
                }
            }
            setTitle(newTitle.join(''))
            setYear(film.release_date)
        }
        
        const fetchImage = async() => {
            const BASE_URL = 'https://api.themoviedb.org/3/search/movie?api_key=a71c653291a8f11727eb5d8df0043e5b&language=en-US&query='
            const YEAR_QUERY = '&page=1&include_adult=false&primary_release_year='
            setLoading(true)
            const res = await axios.get(BASE_URL + title + YEAR_QUERY + year)
            const posterPath = res.data.results[0].poster_path
            setImage('https://image.tmdb.org/t/p/w500/' + posterPath)
            setLoading(false)
        }
        spaceToPlus()
        fetchImage()
    }, [film, title, year])
    
    const imgStyle = {
        height: height, 
        objectFit: 'contain' 
    }

    if(loading){
        return(
            <div className = "center valigned" >
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
        )
    }
    return(
        <>
            <img 
            src={image} 
            alt={title} 
            style={ imgStyle } 
            className="responsive-img activator" />
                <span className="card-title activator grey-text text-darken-3">
            </span>
        </>
    )
}

export default CardImages
