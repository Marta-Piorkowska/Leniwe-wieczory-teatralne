import React, { Component } from 'react';
import './AddSpectacle.scss';
import * as firebase from 'firebase';


class AddSpectacle extends Component {

    state={
        title:'',
        description:'',
        time:'',
        type:'',
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

    handleChangeTime = (e) => {
        this.setState({
            time: e.target.value
        })
    };

    handleChangeType = (e) => {
        this.setState({
            type: e.target.value
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
                    <div className='add-spectacle-main'>
                        <div className='add-spectacle-box'>
                            <div className="add-spectacle-title">
                                <h2>Dodaj spektakl</h2>
                            </div>
                            <form className='add-spectacle-inner-box'>

                                <input
                                    value={this.state.title}
                                    onChange={this.handleChangeName}
                                    type="text"
                                    className="add-spectacle-box-title"
                                    placeholder="Tytuł spektaklu"
                                />
                                <br/>
                                <textarea
                                    className="add-spectacle-box-textarea"
                                    onChange={this.handleChangeAbout}
                                    value={this.state.description}
                                    name="" id="" cols="30" rows="10"
                                    placeholder="Opis spektaklu"
                                />
                                <br/>
                                    <input
                                        onChange={this.handleChangeTime}
                                        value={this.state.time}
                                        type="text"
                                        className="add-spectacle-box-time"
                                        placeholder="Czas trwania"
                                    />
                                <br/>
                                <input
                                    onChange={this.handleChangeType}
                                    value={this.state.type}
                                    type="text"
                                    className="add-spectacle-box-type"
                                    placeholder="Rodzaj spektaklu"
                                />
                                <br/>
                                <input
                                    onChange={this.handleChangeImg}
                                    value={this.state.img}
                                    type="file"
                                    className="add-spectacle-box-img"
                                />
                                <br/>
                                <button
                                    onClick={this.handleSubmit}
                                    value={this.state.isValid}
                                    type="submit"
                                    className="add-spectacle-submit-button"
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

export default AddSpectacle;
