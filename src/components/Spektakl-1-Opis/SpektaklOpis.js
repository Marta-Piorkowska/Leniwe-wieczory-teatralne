import React, { Component } from 'react';
import './SpektaklOpis.scss';
import Plakat from '../images/plakat.jpg'
import PoloniaT from '../images/Polonia-tło.jpg'
import {Link} from "react-router-dom";


class SpektaklOpis extends Component {
    render() {
        return (
            <div className = "container" >
                <div className='spectacle-infoo'>
                    <div className='spectacle-posterr'> <img src={Plakat} alt=""/></div>

                    <div className='spectacle-infoo-about'>
                    <div className='spectacle-infoo-title'>
                        <h3>Antoni Czechow</h3>
                        <h2>32 OMDLENIA</h2>
                    </div>
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
                    <div className='spectacle-infoo-about-who'>
                        <div><span className="weight--bold">Reżyseria: </span> Andrzej Domalik</div>
                        <div><span className="weight--bold">Scenografia i kostiumy: </span> Jagna Janicka</div>
                    </div>
                    </div>
                </div>

                <div className='spectacle-infoo-about-opis'>
                    Antoni Czechow mistrzem humoru sytuacyjnego? Owszem. Zanim powstały najsłynniejsze dramaty jak „Mewa”, „Trzy siostry”, „Wiśniowy sad” pisarz marzył o stworzeniu oryginalnego wodewilu rosyjskiego. Niejako „po drodze” powstały jednoaktówki komediowe wystawiane z powodzeniem nie tylko na scenach stołecznych, także i na prowincji. Gatunki komediowe korespondowały z jego ironiczną naturą, prywatną skłonnością do żartu, zawsze przyglądał się z dużym zainteresowaniem aktorstwu komediowemu. 32 omdlenia tworzą trzy żarty sceniczne, jak sam je określał; „Niedźwiedź”, „Oświadczyny” i „Historia zakulisowa”. Czechow stawia krzywe zwierciadło przed swoimi bohaterami, często korzysta z  kreski karykatury, dokleja im gogolowskie „nosy”. Ale przede wszystkim  bawi i każe nam się głośno śmiać. Jest to typowa „propozycja nie do odrzucenia”. Obsada budzi dreszcz: Krystyna Janda, Jerzy Stuhr, Ignacy Gogolewski.
                    „Czy jest lekarz na sali?!”
                    <br/>
                    Benefisowy spektakl Jerzego Stuhra, przygotowany na 40-lecie debiutu scenicznego.
                </div>
                <div className='spectacle-button-div'>
                    <Link to='/add' style={{textDecoration: 'none'}}>
                        <button className="spectacle-button-add">Dodaj opinię</button>
                    </Link>
                </div>

            </div>

        );
    }
}

export default SpektaklOpis;
