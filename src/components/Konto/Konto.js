import React, { Component } from 'react';
import './Konto.scss';
import * as firebase from 'firebase';



class Konto extends Component {

    state={
        name:'',
        email:'',
        password:'',
    };

    handleSubmit = (event) => {
        event.preventDefault();

        firebase.database().ref('account').push(this.state);
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

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
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

    myFunction = () => {
        let x = document.getElementById("myInput");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    };

    render() {
        return (
            <div className='background'>
                <div className='container'>
                    <div className='account-main'>
                        <div className='account-box'>
                            <div className="account-title">
                                <h2>Rejestracja</h2>
                            </div>
                            <form className='account-inner-box'>
                                <input
                                    value={this.state.name}
                                    onChange={this.handleChangeName}
                                    type="text"
                                    className="account-box-email"
                                    placeholder="Imię/ nick:"
                                />
                                <br/>
                                <input
                                    value={this.state.email}
                                    onChange={this.handleChangeEmail}
                                    type="text"
                                    className="account-box-email"
                                    placeholder="E-mail:"
                                />
                                <br/>
                                <input
                                    value={this.state.password}
                                    onChange={this.handleChangePassword}
                                    type="password"
                                    className="account-box-password"
                                    placeholder="Hasło:"
                                    id='myInput'
                                />
                                <div className="account-checkbox-1">
                                    <input type="checkbox"
                                           onClick={this.myFunction}
                                    />
                                    <label>Pokarz hasło</label>

                                    <button
                                        onClick={this.handleSubmit}
                                        value={this.state.isValid}
                                        type="submit"
                                        className="account-submit-button"
                                    >
                                        Utwórz konto
                                    </button>
                                </div>
                                <br/>
                                <div className="account-checkbox">
                                    <input type="checkbox"/>
                                    <label>Zapamiętaj mnie</label>
                                </div>
                                <br/>
                                <p>Masz już konto na Facebooku?<br/>
                                    Zarejestruj się jednym kliknięciem
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

export default Konto;
