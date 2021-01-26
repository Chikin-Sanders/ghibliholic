import { React, useEffect, useState }from 'react'
import axios from 'axios'
import FilmCards from '../element/FilmCards'
import Pagination from '../element/Pagination'

function FilmList() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setcurrentPage] = useState(1)
    const [postPerPage] = useState(5)

    useEffect(() => {
        const fetchPosts = async() => {
            setLoading(true)
            const res = await axios.get('https://ghibliapi.herokuapp.com/films')
            setPosts(res.data)
            setLoading(false)
        }
        fetchPosts()
    }, [])

    // Get current Post
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    //Change page
    function paginate(pageNumber) {
        setcurrentPage(pageNumber)
        document.documentElement.scrollTop = 0
    }
    function increments(increment) {
        setcurrentPage(currentPage + increment)
        document.documentElement.scrollTop = 0
    }

    return (
        <div className="container filmlist">
            <label htmlFor="filmcards">
                <h4>Look for the films:</h4>
            </label>
            <FilmCards 
                posts={currentPosts} 
                loading={loading} 
                id="filmcards" />
            <Pagination
                loading={loading}
                totalPosts={posts.length}
                postPerPage={postPerPage}
                paginate={paginate}
                currentPage={currentPage}
                increments={increments} />
        </div>
    )
}


export default FilmList
