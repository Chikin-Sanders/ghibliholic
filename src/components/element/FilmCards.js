import React from 'react'
import CardImages from './CardImages'

function FilmCards({ posts, loading}) {
    if (loading){
        return(
            <div className="center">
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
            </div>
        )
    }

    return (
        <div className="row">
            <div className="col s12">
                {
                    posts.map(post => {
                        return(
                            <div className="card row" key={post.id} style={{padding: '15px 0'}}>
                                <div className="col s3 offset-s1">
                                    <CardImages film={post} height={300} />
                                </div>
                                <div className="card-content col s8" style={{textAlign: 'justify'}}>
                                    <span className="card-title"><h4>{post.title}</h4></span>
                                    <hr />
                                    <p style={{ fontStyle: 'italic' }}>release year: {post.release_date}</p>
                                    <p>{post.description}</p>
                                    <a href={'/ghibliholic/films/id/' + post.id}>read more &raquo;</a>
                                </div>
                            </div>
                            )
                    })
                }
            </div>
        </div>
    )
}

export default FilmCards
