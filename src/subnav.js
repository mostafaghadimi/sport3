import React, {Component} from 'react';

import './assets/css/subnav.css'

class Subnav extends Component {

    render () {
        return (
            <div className="subnav">
                {this.props.items.map((info) => {
                    var className = "subnavItem";
                    if (!info.isDroppedDown){
                        if (info.isActive){
                            className += " active";
                        }
                    }
                    else {
                    }
                    var item = (
                        <span className={className} key={info.text.toString()}>
                            <a href={info.url}>
                                {info.text}
                            </a>
                        </span>
                    );
                    return item;
                })}
            </div>
        )
    }
}

export default Subnav;