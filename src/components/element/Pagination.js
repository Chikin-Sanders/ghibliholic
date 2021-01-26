import React from 'react'

function Pagination({ totalPosts, postsPerPage, paginate}) {
    const pageNumbers = []
    for(var i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <ul className="pagination">
            {pageNumbers.map(number => {
                return(
                    <li key={number} className="waves-effect" onClick={() => paginate(number)}>
                        <a href="#!">
                            {number}
                        </a>
                    </li>
                )
                })
            }
        </ul>
    )
}

export default Pagination
