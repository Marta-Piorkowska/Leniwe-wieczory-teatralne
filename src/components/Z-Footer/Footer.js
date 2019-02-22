import React from 'react';
import './Footer.scss';
import kot from '../images/kot.png';
import {Link} from "react-router-dom";


class Footer extends React.Component {
    render() {
        return (
            <div className="container">
                <footer className="footer">
                    <div className='footer-footer'>
                        <a href="/"><img src={kot} alt=""/></a>
                        <div className="footer-text">
                            <p>Copyright 2014 | All Rights Riserved. - Leniwe wieczory teatralne</p>
                        </div>
                    </div>

                    <div>
                        <Link to='/addT' style={{textDecoration: 'none'}}>
                            <button className="footer-button">Dodaj teatr</button>
                        </Link>
                    </div>
                </footer>
            </div>
        )
    }
}


export default Footer;