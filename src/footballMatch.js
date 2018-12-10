import React, { Component } from 'react'

import './assets/css/footballMatch.css'

class FootballMatch extends Component {
    render () {
        return (
            <div className="footballMatchContainer">
                <div className="finalResultFootball">
                    <div className="matchRelatedLeague">لیگ برتر انگلیس فصل 19 - 2018</div>
                    <div className="matchRelatedTeams">
                        <div className="matchFirstTeamLogo">
                            <img src={require('./assets/img/manchester-united.png')} />
                        </div>
                        <div className="matchFirstTeam">
                            منچستریونایتد
                        </div>
                        <div className="matchTeamResults">
                            <div className="matchFirstTeamResult">4</div>
                            <div className="matchFinalTime">نتیجه نهایی</div>
                            <div className="matchSecondTeamResult">1</div>
                        </div>
                        <div className="matchSecondTeam">
                            فولهام
                        </div>
                        <div className="matchSecondTeamLogo">
                            <img src={require('./assets/img/fulham.png')} />
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
    
        )
    }
}

export default FootballMatch;