import React, { Component } from 'react'
import axios from 'axios'

export class CardImages extends Component {
    state = {
        images: {}
    }
    spaceToPlus() {
        const { title, release_date } = this.props.filmDetails
        const year = release_date
        const newTitle = []
        for(var count = 0; count < title.length; count++){
            var char = title.charAt(count).toLowerCase()
            if( char === " ") {
                newTitle.push("+")
            } else {
                newTitle.push(char)
            }
        }
        return [newTitle.join(''), year]
    }
    componentDidMount() {
        const BASE_URL = 'https://api.themoviedb.org/3/search/movie?api_key=a71c653291a8f11727eb5d8df0043e5b&language=en-US&query='
        const YEAR_QUERY = '&page=1&include_adult=false&primary_release_year='
        
        axios.get(BASE_URL + this.spaceToPlus()[0] + YEAR_QUERY + this.spaceToPlus()[1])
        .then((result) =>{
            var posterPath = result.data.results[0].poster_path
            this.setState({
                images: 'https://image.tmdb.org/t/p/w500/' + posterPath
            })
            
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render() {
        const { title } = this.props.filmDetails
        if(title.length){
            return(
                <div>
                    <img src={this.state.images} alt={title} style={{ width: 300 }} className="responsive-img" />
                        <span className="card-title activator grey-text text-darken-3">
                    </span>
                </div>
            )
        }
    }
}

export default CardImages
