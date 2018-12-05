import React, { Component } from "react";

import ImageShow from './imageShow.js'
import './assets/css/newsPreview.css';

class NewsPreview extends Component {
    render() {
        return (
            <div className="newsPreviewContainer">
                <div className="newsPreview">
                    <div className="newsPreviewImage">
                        <img src={require('./assets/img/newsImage.jpg')} alt="football" />
                    </div>
                    <div className="newsPreviewTitle">
                        به به اوس اکبر چطوری
                    </div>
                    <hr/>
                    <div className="newsPreviewPreview">
                        اوس اکبر در خانواده‌ای مذهبی دیده به جهان زیبای خود گشود. وی در 3 سالگی دست خود را در چرخ گوشت ....
                    </div>
                    <div className="newsPreviewFooter">
                        <div className="visitCount">
                            <i class="fas fa-comment"> 3</i>
                            <span style={{width:'15px', display: 'inline-block'}}></span>
                            <i class="fas fa-eye"> 111134</i>
                        </div>
                    </div>
                
                </div>
            </div>
        )
    }
}


export default NewsPreview;