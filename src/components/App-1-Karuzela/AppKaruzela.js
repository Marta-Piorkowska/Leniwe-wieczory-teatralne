import React from 'react';
import './AppKaruzela.scss';

import {
    Link
} from 'react-router-dom';

class AppKaruzela extends React.Component {

    render() {

        return (
        <div className = "container" >
            <div className = "banner" >
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        {
                            this.props.theatres.map((item, index) => {

                                const classes = index === 0 ? "carousel-item active" : "carousel-item";

                                return (
                                    <div className={classes} key={index}>
                                        <div className='one'>
                                            <Link to={`/theatre/${item.id}`} className='carousel-item-logo'><img src={item.img} alt=""/></Link>
                                            <div className='carousel-item-inner'>
                                                <h2>{item.title}</h2>
                                                <div className='carousel-item-inner-info'>
                                                    <p>{item.description}</p>
                                                    <p>Adres: {item.address}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                </div>
            </div>
        </div>


        );
    }
}

export default AppKaruzela;