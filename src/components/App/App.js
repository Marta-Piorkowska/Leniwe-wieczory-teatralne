import React, { Component } from 'react';
import './App.scss';

import AppTekst from '../App-2-Tekst/AppTekst';
import AppBoxR from '../App-3-BoxR/AppBoxR';
import AppBoxL from '../App-4-BoxL/AppBoxL';

import AppKaruzela from "../App-1-Karuzela/AppKaruzela";
import * as firebase from "firebase";



class App extends Component {

    state = {
        theatres: [],
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
                theatres: tab,
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
        <AppKaruzela theatres={this.state.theatres}/>
        <AppTekst/>
        <AppBoxR/>
        <AppBoxL/>
        <AppBoxR/>
        <AppBoxL/>
        <AppBoxR/>
        <AppBoxL/>
</div>
    );
  }
}

export default App;
