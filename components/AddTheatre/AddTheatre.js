import React, { Component } from 'react';
import './AddTheatre.scss';
import * as firebase from 'firebase';


class AddTheatre extends Component {

    state={
        title:'',
        description:'',
        address:'',
        img:'',
    };

    handleSubmit = (event) => {
        event.preventDefault();

        firebase.database().ref('theatres').push(this.state);
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
            title: e.target.value
        })
    };

    handleChangeAbout = (e) => {
        this.setState({
            description: e.target.value
        })
    };

    handleChangeAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    };

    handleChangeImg = (e) => {
        this.setState({
            img: e.target.value
        })
    };


    render() {
        return (
            <div className='background'>
                <div className='container'>
                    <div className='add-theatre-main'>
                        <div className='add-theatre-box'>
                            <div className="add-theatre-title">
                                <h2>Dodaj teatr</h2>
                            </div>
                            <form className='add-theatre-inner-box'>

                                <input
                                   value={this.state.title}
                                   onChange={this.handleChangeName}
                                   type="text"
                                   className="add-theatre-box-title"
                                   placeholder="Nazwa teatru"
                                />
                                <br/>
                                <textarea
                                    className="add-theatre-box-textarea"
                                    onChange={this.handleChangeAbout}
                                    value={this.state.description}
                                    name="" id="" cols="30" rows="10"
                                    placeholder="Opis teatru"
                                />
                                <br/>
                                <input
                                    onChange={this.handleChangeAddress}
                                    value={this.state.address}
                                    type="text"
                                    className="add-theatre-box-address"
                                    placeholder="Adres teatru"
                                />
                                <br/>
                                <input
                                    onChange={this.handleChangeImg}
                                    value={this.state.img}
                                    type="file"
                                    className="add-theatre-box-img"
                                />
                                <br/>
                                <button
                                    onClick={this.handleSubmit}
                                    value={this.state.isValid}
                                    type="submit"
                                    className="add-theatre-submit-button"
                                >
                                    Dodaj
                                </button>

                            </form>

                        </div>
                    </div>


                </div>
            </div>


        );
    }
}

export default AddTheatre;
