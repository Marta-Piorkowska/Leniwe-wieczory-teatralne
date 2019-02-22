import React, { Component } from 'react';
import './SpektaklOcena.scss';
import plakat from "../images/plakat.jpg";


class SpektaklOcena extends Component {
    render() {
        return (
                <div className = "container" >
                    <div className='opinion'>
                        <div className='opinion-info'>
                            <h2>Name</h2>

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

                            <p>Antoni Czechow mistrzem humoru sytuacyjnego? Owszem. Zanim powstały najsłynniejsze dramaty jak „Mewa”, „Trzy siostry”, „Wiśniowy sad” pisarz marzył o stworzeniu oryginalnego wodewilu rosyjskiego. Niejako „po drodze” powstały jednoaktówki komediowe wystawiane z powodzeniem nie tylko na scenach stołecznych, także i na prowincji.
                                „Czy jest lekarz na sali?!”</p>

                            <p>Data</p>

                        </div>
                    </div>
                </div>

        );
    }
}

export default SpektaklOcena;
