import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './assets/css/default.css'
import './navbar.js'
import Navbar from './navbar.js';
import Comment from './comment.js'
import News from './news.js'
import NewsPreview from './newsPreview.js';

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
                <News/>
                {/* <Comment/> */}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))