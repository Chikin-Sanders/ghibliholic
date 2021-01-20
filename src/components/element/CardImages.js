import React, { Component } from 'react'

export class CardImages extends Component {
    spaceToPlus() {
        const { title } = this.props
        const newTitle = []
        for(var count = 0; count < title.length; count++){
            var char = title.charAt(count).toLowerCase()
            if( char === " ") {
                newTitle.push("+")
            } else {
                newTitle.push(char)
            }
        }
        return newTitle.join('')
    }
    componentDidMount() {
        
    }
    render() {
        const { title, rating } = this.props
        if(title.length){
            return(
                <div className="row">
                    <span className="card-title grey-text text-darken-3">
                        <h6 className="col s6" style={{ fontWeight: 'bold' }}>{title}</h6>
                        <span className="col s6">
                            <i class="material-icons yellow-text text-darken-2">star</i>
                            {' '}
                            {rating}
                        </span>
                    </span>
                </div>
            )
        }
    }
}

export default CardImages
