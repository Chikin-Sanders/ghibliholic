import React from 'react'

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
                            <div className="card" key={post.id}>
                                <div className="card-content">
                                    <span className="card-title">{post.title}</span>
                                    <hr />
                                    <p>{post.description}</p>
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
