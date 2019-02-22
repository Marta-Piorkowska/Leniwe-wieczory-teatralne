import React from 'react';
import './AppBoxR.scss';
import plakat from "../images/plakat.jpg";

class AppBoxR extends React.Component {
    render() {
        return (
            <div className = "container" >
                <div className='opinion1'>
                    <div className='opinion1-yellow'>
                        <a href="" className='opinion1-poster'><img src={plakat} alt=""/></a>
                        <h4>Opera Narodowa</h4>
                        <h2>Title</h2>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum error ipsam mollitia tempora. Alias cumque distinctio dolor excepturi natus odit temporibus voluptas voluptate! Corporis dicta dolorum nam qui quia quos?</h3>
                    </div>
                </div>
            </div>
        )
    }
}


export default AppBoxR;