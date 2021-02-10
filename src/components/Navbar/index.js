import React,{Component} from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom'; //react-router

import './nav.scss'; //nav bar styling
import Menu from './Menu';

class Nav extends Component {

    render(){
        return(
            <Router>
                <nav className="navbar" >
                    <div className="logo">
                        <h2>
                            Ayanda...
                        </h2>
                    </div>
                    <ul className="navbar-list">
                        <li className="navbar-list-item">
                            <Link to="/projects" >
                                Projects
                            </Link>
                        </li>
                        <li className="navbar-list-item">
                        <Link to="/about">
                                About
                            </Link>
                        </li>
                        <li className="navbar-list-item">
                        <Link to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="navbar-menu">
                        <Menu/>
                    </div>
                </nav>
            </Router>
        )
    }
}

export default Nav;