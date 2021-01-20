import React, { Component } from 'react'
import M from 'materialize-css'

export class Carousel extends Component {
    state = {
        images: [
            { id: 1, title: 'My Neighbor Totoro', year: 1988, src:'https://www.denofgeek.com/wp-content/uploads/2012/11/totoro-main.jpg?resize=640%2C380'},
            { id: 2, title: 'Grave of the Fireflies', year: 1988, src:'https://www.denofgeek.com/wp-content/uploads/2018/04/grave-main.jpg?resize=768%2C432'},
            { id: 3, title: 'Castle in the Sky', year: 1986, src:'https://media1.fdncms.com/kidsvt/imager/u/blog/5284696/castle.jpg?cb=1595429146'}
        ]
    }
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems, {
                height: 690,
                interval: 3000,
                indicators: false
            });
        });
    }

    render() {
        const { images } = this.state;
        return (
            <div className="slider">
                <ul className="slides">
                {
                    images.map( image => {
                        return(       
                                <li key={image.id}>
                                    <img src={image.src} alt={'image no. ' + image.id} />
                                    <div className="caption left-align" style={{top: '80%', fontWeight: 'bold'}} >
                                        <h4>{image.title}</h4>
                                        <p style={{fontStyle: 'italic', fontWeight:'normal'}}>release year: {image.year}</p>
                                    </div>
                                </li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}

export default Carousel
