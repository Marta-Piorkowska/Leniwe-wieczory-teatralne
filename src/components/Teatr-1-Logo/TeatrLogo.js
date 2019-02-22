import React, { Component } from 'react';
import './TeatrLogo.scss';

class TeatrLogo extends Component {
    render() {
        return (
            <div className = "container" >
                <div className='theatre-banner'>
                    <img src={this.props.img} alt=""/>

                </div>
            </div>

        );
    }
}

export default TeatrLogo;
