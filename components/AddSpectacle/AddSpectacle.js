import React, { Component } from 'react';
import './AddSpectacle.scss';


class AddSpectacle extends Component {
    render() {
        return (
            <div className='background'>
                <div className='container'>
                    <div className='main-add'>
                        <div className='opinion-add'>
                            <div className="panell">
                                <h2>Dodaj spektakl</h2>
                            </div>
                            <form className='opinion-add-box'>

                                <div className="opinion-add-name">
                                    <input type="text" className="form-control"  placeholder="Tytuł spektaklu"/>
                                </div>
                                <div className="opinion-add-textarea">
                                    <textarea name="" id="" cols="30" rows="10" placeholder="Opis spektaklu"></textarea>
                                </div>
                                <div className="opinion-add-name">
                                    <input type="text" className="form-control"  placeholder="Czas trwania"/>
                                </div>

                                <div className="opinion-add-name">
                                    <input type="text" className="form-control"  placeholder="Typ spektaklu"/>
                                </div>


                                <button type="submit" className="opinion-add-button">Dodaj</button>

                            </form>

                        </div>
                    </div>


                </div>
            </div>


        );
    }
}

export default AddSpectacle;
