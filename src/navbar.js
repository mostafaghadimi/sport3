import React, {Component} from 'react';
import './assets/css/navbar.css';
import ShowMenu from './showMenu.js'

class Navbar extends Component {
    constructor(props){
        super(props);
        this.menuIcon = this.menuIcon.bind(this);
        this.showMenu = this.showMenu.bind(this);

        this.state = {
            showMenu: false
        }
    }

    menuIcon (){
        let nav = document.querySelector('.overlay-menu');
        if (nav.style.transform != 'translateX(0%)') {
            nav.style.transform = 'translateX(0%)';
            nav.style.transition = 'transform 0.2s ease-out';
        } else { 
            nav.style.transform = 'translateX(100%)';
            nav.style.transition = 'transform 0.2s ease-out';
        }
        
        let toggleIcon = document.querySelector('.menuIcon');
        if (toggleIcon.className != 'menuIcon toggle') {
            toggleIcon.className += ' toggle';
        } else {
            toggleIcon.className = 'menuIcon';
        }
    }

    showMenu(){
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    render(){
        return (
            <div>
                <nav id="navbar">
                    <div className="nav-wrapper">
                        <div className="logo">
                            Sport3
                        </div>
                        <ul id="menu">
                            <li>
                                <a href="#" >
                                فوتبال
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    بسکتبال
                                </a>
                            </li>
                        </ul>
                        <div className="search">
                            <ul>
                                <li>
                                    <input type="search" placeholder="جستجو..."/>
                                </li>
                                <li>
                                    <span className="loginSignup" onClick={this.showMenu}></span>
                                    {this.state.showMenu ? <ShowMenu/>: null}
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </nav>                    
                <div className="menuIcon" onClick={this.menuIcon}>
                    <span className="icon icon-bars"></span>
                    <span className="icon icon-bars overlay"></span>
                </div>

                <div className="overlay-menu">
                    <ul id="menu">
                        <li>
                            <a href="#">
                                فوتبال
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                بسکتبال
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
        
    }
}

export default Navbar;
