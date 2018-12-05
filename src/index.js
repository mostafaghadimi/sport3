import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './assets/css/default.css'
import './navbar.js'
import Navbar from './navbar.js';
import Comment from './comment.js'
import News from './news.js'
import NewsPreview from './newsPreview.js';
import Subnav from './subnav.js'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false, 
            currentSport: 'Football'
        }
    }
    render() {
        return (
            <div>
                <Navbar isLoggedIn = {this.state.isLoggedIn}/>
                <Subnav items={[{text: 'اخبار', url: '#', isDroppedDown: false, dropDownItems: [], isActive: true}, {text: 'سلام', url: '#', isDroppedDown: true, dropDownItems: ['ahmad', 'zoghi'], isActive: true}]} />
                {/* <Comment/> */}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))