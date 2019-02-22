import React, { Component } from 'react';
import './AddOpinion.scss';


class AddOpinion extends Component {
    render() {
        return (
            <div className='background'>
                <div className='container'>
                    <div className='add-opinion-main'>
                        <div className='add-opinion-box'>
                            <div className="add-opinion-title">
                                <h2>Dodaj swoją opinię</h2>
                            </div>
                            <form className='add-opinion-inner-box'>

                                <input type="text" className="add-opinion-name"  placeholder="Nazwa użytkownika"/>

                                <div className="stars">
                                    <input type="radio" id="star5" name="star" value="5"/>
                                    <label htmlFor="star5"> Five Stars </label>
                                    <input type="radio" id="star4" name="star" value="4"/>
                                    <label htmlFor="star4"> Four Stars </label>
                                    <input type="radio" id="star3" name="star" value="3"/>
                                    <label htmlFor="star3"> Three Stars </label>
                                    <input type="radio" id="star2" name="star" value="2"/>
                                    <label htmlFor="star2"> Two Stars </label>
                                    <input type="radio" id="star1" name="star" value="1"/>
                                    <label htmlFor="star1"> One Star </label>
                                </div>

                                <textarea
                                    className="add-opinion-textarea"
                                    name="" id="" cols="30" rows="10"
                                    placeholder="Twoja opinia">
                                    </textarea>

                                <button type="submit" className="add-opinion-submit-button">Dodaj</button>

                            </form>

                        </div>
                    </div>


                </div>
            </div>


        );
    }
}

export default AddOpinion;
