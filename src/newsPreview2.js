import React, { Component } from "react";

import ImageShow from './imageShow.js'
import './assets/css/newsPreview.css';

class NewsPreview2 extends Component {
    render() {
        return (
            <div className="newsPreviewContainer">
                <div className="newsPreview">
                    <img className={'news-prev-image'} src={require('./assets/img/newsImage2.jpg')} alt="football" />
                    <div className="newsPreviewTitle">
                        تیم بسکتبال بارسلونا در سومین دیدار ....
                    </div>
                    <hr/>
                    <div className="newsPreviewPreview">
                        آقام بارسلونا بازی‌ها رو یکی پس از دیگری می‌بره و پوزه‌ی حریف‌ رو به خاک می‌ماله
                    </div>
                    <div className="newsPreviewFooter">
                        <div className="visitCount">
                            <i class="fas fa-comment"> 87</i>
                            <span style={{width:'15px', display: 'inline-block'}}></span>
                            <i class="fas fa-eye"> 888134</i>
                        </div>
                    </div>
                
                </div>
            </div>
        )
    }
}


export default NewsPreview2;