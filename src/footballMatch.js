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
                <div className="matchTeamsArrangement">
                    <div className="matchHostArrangement">
                        <div>
                            شماره
                        </div>
                        <div>
                            نام بازیکن
                        </div>
                        <div>
                            1
                        </div>
                        <div>دیوید دخیا</div>
                        <div>
                           4
                        </div>
                        <div>
                            فیل جونز
                        </div>
                        <div>
                           12
                        </div>
                        <div>
                            کریس اسمالینگ
                        </div>
                        <div>
                            18
                        </div>
                        <div>
                            اشلی یانگ
                        </div>
                        <div>
                           20
                        </div>
                        <div>
                           دیوگو دالوت
                        </div>
                        <div>
                           14
                        </div>
                        <div>
                            جسی لینگارد
                        </div>
                    </div>
                    <div className="matchGuestArrangement">
                    <div>
                            شماره
                        </div>
                        <div>
                            نام بازیکن
                        </div>
                        <div>
                            1
                        </div>
                        <div>دیوید دخیا</div>
                        <div>
                           4
                        </div>
                        <div>
                            فیل جونز
                        </div>
                        <div>
                           12
                        </div>
                        <div>
                            کریس اسمالینگ
                        </div>
                        <div>
                            18
                        </div>
                        <div>
                            اشلی یانگ
                        </div>
                        <div>
                           20
                        </div>
                        <div>
                           دیوگو دالوت
                        </div>
                        <div>
                           14
                        </div>
                        <div>
                            جسی لینگارد
                        </div>
                    </div>
                </div>
            </div>
    
        )
    }
}

export default FootballMatch;