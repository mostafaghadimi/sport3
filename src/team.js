import React, { Component } from 'react';

import './assets/css/team.css'

class Team extends Component {
    render (){
        return (
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
                <hr/>
                <div className="teamMatchPlayer">
                    <div className="teamPlayers">
                        
                        <div className="teamPlayerContainer">

                            <div>عکس</div>
                            <div>نام بازیکن</div>
                            <div>پست</div>

                            <div className="teamPlayerPic">
                                <img src={require('./assets/img/MehranAsghari.jpg')} />
                            </div>
                            <div>مهران اصغری</div>
                            <div>حمله</div>

                            <div className="teamPlayerPic">
                                <img src={require('./assets/img/MehranAsghari.jpg')} />
                            </div>
                            <div>اکبر غیوری</div>
                            <div>دفاع</div>


                            <div className="teamPlayerPic">
                                <img src={require('./assets/img/MehranAsghari.jpg')} />
                            </div>
                            <div>مهران اکبری</div>
                            <div>دروازه‌بان</div>
                        </div>
                    </div>
                    <div className="teamFixture">
                        <div className="fixtureFilter">
                            <button>برد/باخت</button>
                            <button>تاریخ</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Team