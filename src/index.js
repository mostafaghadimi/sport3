import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './assets/css/default.css';
import './navbar.js';
import Navbar from './navbar.js';
import Comment from './comment.js';
import News from './news.js';
import NewsPreview from './newsPreview.js';
import Subnav from './subnav.js';
import PlayerInformation from './playerInformation.js'

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
                {/* <Subnav items={[{text: 'سلام', url: '#', isDroppedDown: false, dropDownItems: [], isActive: true}, {text: 'عرض', url: '#', isDroppedDown: false, dropDownItems: [], isActive: false}, {text: 'ادب', url: '#', isDroppedDown: true, dropDownItems: ['ahmad', 'zoghi'], isActive: false}]} />
                <div class="main-container">
                    <News/>
                </div> */}
                <PlayerInformation url={require('./assets/img/MehranAsghari.jpg')} playerName={'مهران اصغری'} age={20} position={'اون پشتا'} weight={71} height={180} team={'پرسپولیس'} nationality={'ایران'} appearanceNo={10} goalNo={2} assistNo = {1} yellowCards={3} redCards={1}/>
            </div>

        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))