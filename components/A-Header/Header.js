import React from 'react';
import './Header.scss';
import logo from "../images/logo.png";
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header className="page-header">
                <div className="container">

                    <h1 className="page-logo">
                        <a href="/" className="page-logo-link">
                            <img src={logo} alt=""/>
                        </a>
                    </h1>


                    <nav className="page-nav">
                        <fieldset className="page-nav-field">
                            <input type='text' placeholder="Wyszukaj teatry i spektakle..."/>
                            <button><i className="fas fa-search"></i></button>
                        </fieldset>
                        <Link to='/login' style={{textDecoration: 'none'}}>
                            <button className="page-nav-log">Zaloguj się</button>
                        </Link>
                        <Link to='/register' style={{textDecoration: 'none'}}>
                            <button className="page-nav-create">Załóż konto</button>
                        </Link>
                    </nav>

                </div>
            </header>
        )
    }
}


export default Header;