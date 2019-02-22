import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './components/App/App';
import Teatr from './components/Teatr/Teatr';
import Spektakl from './components/Spektakl/Spektakl';
import Konto from './components/Konto/Konto';
import Log from './components/Log/Log';
import * as serviceWorker from './serviceWorker';

import {
    HashRouter,
    Route
} from 'react-router-dom';

import * as firebase from 'firebase';
import Header from "./components/A-Header/Header";
import Footer from "./components/Z-Footer/Footer";
import AddOpinion from "./components/AddOpinion/AddOpinion";
import AddTheatre from "./components/AddTheatre/AddTheatre";
import AddSpectacle from "./components/AddSpectacle/AddSpectacle";

const config = {
    apiKey: "AIzaSyA42yqQwNEXDi83yom8p9Gsylrtdf9T2PI",
    authDomain: "leniwewieczoryteatralne.firebaseapp.com",
    databaseURL: "https://leniwewieczoryteatralne.firebaseio.com",
    projectId: "leniwewieczoryteatralne",
    storageBucket: "leniwewieczoryteatralne.appspot.com",
    messagingSenderId: "132290031602"
};
firebase.initializeApp(config);




const Routing = <HashRouter>
    <div>
        <Header/>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/theatre/:id" component={Teatr} />
            <Route path="/spectacle/:id" component={Spektakl} />
            <Route path="/register" component={Konto} />
            <Route path="/login" component={Log} />
            <Route path="/add" component={AddOpinion} />
            <Route path="/addT" component={AddTheatre} />
            <Route path="/addS" component={AddSpectacle} />
        </div>
        <Footer/>
    </div>
</HashRouter>;

ReactDOM.render(Routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();