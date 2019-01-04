import React, { Component } from 'react';
import './Teatr.scss';

import TeatrLogo from "../Teatr-1-Logo/TeatrLogo";
import TeatrSztuki from "../Teatr-3-Sztuki/TeatrSztuki";
import TeatrSort from "../Teatr-2-Sort/TeatrSort";

import * as firebase from "firebase";


class Teatr extends Component {

    state = {
        theathe: {},
        isFetching: true
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        firebase.database().ref('/theatres/' + id).on('value', response => {
            const data = response.val();

            this.setState({
                theathe: data,
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

                <TeatrLogo img={this.state.theathe.img}/>
                <TeatrSort/>
                <TeatrSztuki/>

            </div>
        );
    }
}

export default Teatr;
