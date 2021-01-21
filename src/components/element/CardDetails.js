import React from 'react'

function CardDetails(props) {
    const film  = props.filmDetails

    return (
        <div>
            <span className="card-title grey-text text-darken-3 row" style={{padding: 15}} >
                <h6 className="col s8 left valigned" style={{ fontWeight: 'bold' }}>{film.title}</h6>
                <span className="col s4 right">
                    <i class="material-icons yellow-text text-darken-2">star</i>
                    {' '}
                    {film.rt_score}
                </span>
            </span>
            <hr/>
            <div className="row left-align grey-text text-darken-2" style={{ textAlign: 'justify' }}>
                <p>Director : {film.director} </p>
                <p>Year : {film.release_date}</p>
                <p>{film.description}</p>
            </div>
        </div>
    )
}

export default CardDetails
