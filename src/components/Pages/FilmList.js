import React, { Component } from 'react'
import FilmCards from '../element/FilmCards'
import Pagination from '../element/Pagination'
import axios from 'axios'

export class FilmList extends Component {
    state = {
        posts: [],
        loading: false,
        currentPage: 1,
        postsPerPage: 5
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
        const { loading, postsPerPage, posts } = this.state
        var { currentPage } = this.state
        const indexOfLastPost = currentPage * postsPerPage
        const indexOfFirstPost = indexOfLastPost - postsPerPage
        const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)

        function paginate(pageNumbers){
            currentPage = pageNumbers
            console.log(currentPage)
        }

        return (
            <div className='container'>
                <label htmlFor="search-bar"><h4>Find your film:</h4></label>
                <FilmCards className="center-align" posts={currentPost} loading={loading} />
                <Pagination totalPosts={posts.length} postsPerPage={postsPerPage} paginate={paginate} />
            </div> 
        )
    }
}

export default FilmList
