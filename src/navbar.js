import React, {Component} from 'react';
import './assets/css/navbar.css';


class Navbar extends Component {
    render(){
        return (
            <div>
                <nav>
                    <div className="logo"></div>
                    <div className="hoverable football">
                        <a href="#">
                            فوتبال
                        </a>
                    </div>
                    <div className="hoverable basketball">
                        <a href="">
                            بسکتبال 
                        </a>
                    </div>     
                    <div></div>
                    <div>
                        <input type="search" placeholder="جستجو ..." />
                    </div>
                    <div className="login">
                        
                    </div>
                    {/* TODO: signout */}
                    
                </nav>
                <div className="guest">
                            خوش آمدید!
                            <div>
                                <button className="guestLogin">ورود</button>
                            </div>
                            <div>
                                <button className="guestSignUp">ثبت‌نام</button>
                            </div>
                </div>
            </div>
        )
    }
}

export default Navbar;
