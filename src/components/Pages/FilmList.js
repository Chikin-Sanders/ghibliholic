import React, { Component } from 'react'
import FilmCards from '../element/FilmCards'
import axios from 'axios'

export class FilmList extends Component {
    state = {
        posts: [],
        loading: false
    }

    componentDidMount(){
        const fetchPosts = async () => {
            this.setState({ loading: true })
            const res = await axios.get('https://ghibliapi.herokuapp.com/films')
            this.setState({
                posts: res.data,
                loading: false
            })
        }

        fetchPosts()
    }

    render() {
        console.log(this.state.posts)
        return (
            <div className='container'>
                <label htmlFor="search-bar"><h4>Find your film:</h4></label>
                <FilmCards className="center-align" posts={this.state.posts} loading={this.state.loading} />
            </div>
        )
    }
}

export default FilmList
