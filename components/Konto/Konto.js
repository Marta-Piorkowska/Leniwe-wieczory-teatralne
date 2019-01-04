import React, { Component } from 'react';
import './Konto.scss';


class Konto extends Component {
    render() {
        return (
            <div className='background'>
                <div className='containerr'>
                    <header className="heading"> Registration-Form</header><hr></hr>
                    {/*Form starting*/}
                    <div className="row ">
                       {/*For Name*/}
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-xs-4">
                                    <label className="firstname">First Name :</label> </div>
                                <div className="col-xs-8">
                                    <input type="text" name="fname" id="fname" placeholder="Enter your First Name" className="form-control "></input>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-xs-4">
                                    <label className="lastname">Last Name :</label></div>
                                <div className ="col-xs-8">
                                    <input type="text" name="lname" id="lname" placeholder="Enter your Last Name" className="form-control last"></input>
                                </div>
                            </div>
                        </div>
                        {/*For email*/}
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-xs-4">
                                    <label className="mail" >Email :</label></div>
                                <div className="col-xs-8"	>
                                    <input type="email" name="email"  id="email"placeholder="Enter your email" className="form-control" ></input>
                                </div>
                            </div>
                        </div>
                        {/*/!*For Password and confirm password*!/*/}
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-xs-4">
                                    <label className="pass">Password :</label></div>
                                <div className="col-xs-8">
                                    <input type="password" name="password" id="password" placeholder="Enter your Password" className="form-control"></input>
                                </div>
                            </div>
                        </div>

                        {/*For Phone number*/}
                        <div className="col-sm-12">
                            <div className ="row">
                                <div className="col-xs-4 ">
                                    <label className="gender">Gender:</label>
                                </div>

                                <div className="col-xs-4 male">
                                    <input type="radio" name="gender"  id="gender" value="boy"/><p>Male</p>
                                </div>

                                <div className="col-xs-4 female">
                                    <input type="radio"  name="gender" id="gender" value="girl" /><p>Female</p>
                                </div>

                            </div>
                            <div className="col-sm-12">
                                <div className="btn btn-warning">Submit</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        );
    }
}

export default Konto;
