import React, { Component } from 'react';

import './assets/css/team.css'
import Scores from './scores';

class Team extends Component {
    render (){
        return (
            <div>
            <div className="teamNameInformationContainer">
                <div className="teamNameInfo">
                    <div className="teamLogo">
                        <img src={require('./assets/img/manchester-united.png')} />
                    </div>
                    <div className="teamNameContainer">
                        <div>منچستر یونایتد</div>
                        <div>
                            <button className="teamFollow">
                                دنبال کن
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team-scores">
                <Scores />

            </div>
            </div>
        )
    }
}

export default Team