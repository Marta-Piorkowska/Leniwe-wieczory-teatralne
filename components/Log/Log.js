import React, { Component } from 'react';
import './Log.scss';


class Log extends Component {
    render() {
        return (
        <div className='background'>
            <div className='container'>

                    <h1 className="form-heading">login Form</h1>
                    <div className="login-form">
                        <div className="main-div">
                            <div className="panel">
                                <h2>Zaloguj się</h2>
                                <p>Please enter your email and password</p>
                            </div>
                            <form id="Login">

                                <div className="form-group">


                                    <input type="email" className="form-control" id="inputEmail" placeholder="Email Address"/>

                                </div>

                                <div className="form-group">

                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>

                                </div>
                                <div className="forgot">
                                    <a href="reset.html">Forgot password?</a>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>

                            </form>
                        </div>
                    </div></div>


        </div>


        );
    }
}

export default Log;
