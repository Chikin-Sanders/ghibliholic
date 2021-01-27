import React from 'react'

function Pagination({ loading, totalPosts, postPerPage, paginate, currentPage, increments }) {
    const pageNumbers = []
    for(var i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i)
    }
    
    if(loading) {
        return <div></div>
    }
    return (
        <ul className="pagination row center">
            <li 
                className={currentPage === pageNumbers[0] ? 'hide' : 'hoverable' } 
                onClick={() => increments(-1)} >
                <a href="#!"><i className="material-icons">chevron_left</i></a>
            </li>
            {pageNumbers.map(number => {
                return(
                    <li key={number} 
                        className={currentPage === number ? 'active waves-effect' : 'hoverable'} 
                        onClick={() => paginate(number)}>
                        <a href="#!">
                            {number}
                        </a>
                    </li>
                )
                })
            }
            <li  
                className={currentPage === pageNumbers[pageNumbers.length - 1] ? 'hide' : 'hoverable'} 
                onClick={() => increments(1)} >
                <a href="#!"><i className="material-icons">chevron_right</i></a>
            </li>
        </ul>
    )
}

export default Pagination
