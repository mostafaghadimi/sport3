import React, {Component} from 'react';
import './assets/css/navbar.css';
import './assets/js/navbar.js'



class Navbar extends Component {
    render(){
        return (
            <div>
                <nav id="navbar">
                    <div className="nav-wrapper">
                        <div className="logo">
                        Sport3
                        </div>

                        
                        <ul id="menu">
                        <li><span className="football"></span><a href="#" >فوتبال</a></li>
                        <li className="basketball"><a href="#" >بسکتبال</a></li>
                        </ul>

                        <div className="search">
                        <ul>
                            <li>
                                <input type="search" placeholder="جستجو..."/>
                            </li>
                            <li>
                                <span className="loginSignup"></span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>


                    
                    <div className="menuIcon">
                    <span className="icon icon-bars"></span>
                    <span className="icon icon-bars overlay"></span>
                    </div>


                    <div className="overlay-menu">
                    <ul id="menu">
                        <li className="football"><a href="#">فوتبال</a></li>
                        <li className="basketball"><a href="#">بسکتبال</a></li>
                        </ul>
                    </div>
                </div>
        )
    }
}

export default Navbar;
