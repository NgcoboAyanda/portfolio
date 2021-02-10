
import React, {Component} from 'react';

import Navbar from './Navbar';
import {BrowserRouter as Router} from 'react-router-dom'

import FrontPage from './FrontPage';
import './App.scss';


class App extends Component{

    render(){
        return(
            <div className="app-container">
                <Navbar/>
                <FrontPage/>                
            </div>
        )
    }
}

export default App;