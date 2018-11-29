import React, {Component} from 'react';
import './assets/css/navbar.css';


class Navbar extends Component {
    render(){
        return (
            <nav>
                <div className="logo"></div>
                <div className="hoverable football">
                    <a href="#">
                        فوتبال
                    </a>
                </div>
                <div className="hoverable basketball">بسکتبال</div>
                
                <div></div>

                <div>
                    <input type="search" placeholder="جستجو ..." />
                </div>
                <div className="login">
                </div>
            </nav>
        )
    }
}

export default Navbar;
