import React, { Component } from 'react';
import './Spektakl.scss';

import SpektaklOpis from "../Spektakl-1-Opis/SpektaklOpis";
import SpektaklOcena from "../Spektakl-2-Ocena/SpektaklOcena";
import TeatrSort from "../Teatr-2-Sort/TeatrSort";
import TeatrSztuki from "../Teatr-3-Sztuki/TeatrSztuki";
import * as firebase from "firebase";



class Spektakl extends Component {

    state = {
        spectacles: [],
        isFetching: true
    };


    componentDidMount() {
        firebase.database().ref('/theatres').on('value', response => {
            const data = response.val();
            const tab = [];

            for (let key in data) {
                const obj = data[key];
                obj.id = key;
                tab.push(obj)
            }

            this.setState( {
                spectacles: tab,
                isFetching: false
            })
        })

    }

    render() {

        if(this.state.isFetching) {
            return <p>Loading...</p>
        }
        return (
            <div className='All'>
                <SpektaklOpis img={this.state.spectacles.img}/>
                <SpektaklOcena/>
                <SpektaklOcena/>
                <SpektaklOcena/>
                <SpektaklOcena/>


            </div>
        );
    }
}

export default Spektakl;
