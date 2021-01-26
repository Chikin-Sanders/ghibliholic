import React, { Component } from 'react'
import axios from 'axios'

export class CardImages extends Component {
    state = {
        images: {},
        loading: false
    }
    spaceToPlus() {
        const { title, release_date } = this.props.film
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
        const fetchImage = async() => {
            this.setState({
                loading: true
            })
            const res = await axios.get(BASE_URL + this.spaceToPlus()[0] + YEAR_QUERY + this.spaceToPlus()[1])
            const posterPath = res.data.results[0].poster_path
            this.setState({
                images: 'https://image.tmdb.org/t/p/w500/' + posterPath,
                loading: false
            })
        }
        fetchImage()
        // .then((result) =>{
        //     var posterPath = result.data.results[0].poster_path
        //     this.setState({
        //         images: 'https://image.tmdb.org/t/p/w500/' + posterPath
        //     })
            
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
    }
    render() {
        const { height } = this.props
        const { title } = this.props.film
        const imgStyle = {
            height: height, 
            objectFit: 'contain' 
        }
        if(this.state.loading){
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
        } else if(title.length){
            return(
                <>
                    <img 
                    src={this.state.images} 
                    alt={title} 
                    style={ imgStyle } 
                    className="responsive-img activator" />
                        <span className="card-title activator grey-text text-darken-3">
                    </span>
                </>
            )
        }
    }
}

export default CardImages
