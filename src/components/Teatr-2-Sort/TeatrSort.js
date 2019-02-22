import React, { Component } from 'react';
import './TeatrSort.scss';
import {Link} from "react-router-dom";





class TeatrSort extends Component {
    render() {
        return (
            <div className = "container" >
                <div className='search'>

                    <div className='search-select'>
                        <select className='search-select-sort' name="" id="" >
                            <option value="1">Alfabetycznie</option>
                            <option value="2">Najwyżej oceniane</option>
                            <option value="3">Ostatnio oceniane</option>
                        </select>
                    </div>

                    <div>
                        <Link to='/addS' style={{textDecoration: 'none'}}>
                            <button className="search-button">Dodaj sztukę</button>
                        </Link>
                    </div>

                </div>
            </div>
        );
    }
}

export default TeatrSort;
