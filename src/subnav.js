import React, {Component} from 'react';

import './assets/css/subnav.css'

class Subnav extends Component {

    constructor(props) {
        super(props);
        this.state = []
    }

    render () {
        return (
            <div className="subnav">
                {this.props.items.map((info) => {
                    var className = "subnavItem";
                    var dropDownIcon = <span></span>;
                    var dropDownItems = <span></span>
                    if (!info.isDroppedDown){
                        if (info.isActive){
                            console.log('hello')
                            className += " active";
                        }
                    }
                    else {
                        dropDownIcon = <i className="fas fa-caret-down"></i>
                        info.dropDownItems.map((value) =>{
                            dropDownItems += <span key={value}>{value}</span>
                            console.log(value)
                        })
                    }
                    var item = ( 
                        <span className={className} key={info.text.toString()}>
                            <a href={info.url}>
                                {info.text}
                                {dropDownIcon}
                            </a>
                            {dropDownItems}
                        </span>
                    );
                    return item;
                }) }
            </div>
        )
    }
}

export default Subnav;