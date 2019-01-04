import React, { Component } from 'react';
import './Log.scss';
import * as firebase from 'firebase';

class Log extends Component {

    state={
        email:'',
        password:'',
    };

    handleSubmit = (event) => {
        event.preventDefault();

        firebase.database().ref('log').push(this.state);
        console.log(this.state)
        // if (!this.state.day && !this.state.title && !this.state.about && !this.state.address  ){
        //     this.setState({
        //         warning: "Uzupełnij wszystkie pola formularza",
        //         isValid: false
        //     });
        //     this.setState({
        //         isValid: true
        //     })
        // }


    };

    handleChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    };

    handleChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    };

    render() {
        return (
        <div className='background'>
            <div className='container'>
                <div className='log-main'>
                    <div className='log-box'>
                        <div className="log-title">
                            <h2>Zaloguj się</h2>
                        </div>
                        <form className='log-inner-box'>

                            <input
                                value={this.state.email}
                                onChange={this.handleChangeEmail}
                                type="text"
                                className="log-box-email"
                                placeholder="E-mail:"
                            />
                            <br/>
                            <input
                                value={this.state.password}
                                onChange={this.handleChangePassword}
                                type="text"
                                className="log-box-password"
                                placeholder="Hasło:"
                            />
                            <br/>
                            <button
                                onClick={this.handleSubmit}
                                value={this.state.isValid}
                                type="submit"
                                className="log-submit-button"
                            >
                                Zaloguj
                            </button>
                            <br/>
                            <br/>
                            <div className="log-checkbox">
                                <input type="checkbox"/>
                                <label>Zapamiętaj mnie</label>
                            </div>
                            <br/>
                            <p>Masz już konto na Facebooku?<br/>
                                Użyj swojego loginu z Facebooka.
                            </p>
                            <a href="#" onClick="">
                                <img
                                    src="https://s-konto.lubimyczytac.pl/img/fb-login.gif"
                                    alt=""
                                />
                            </a>
                            <br/>

                        </form>
                    </div>
                </div>
            </div>
        </div>





        );
    }
}

export default Log;
