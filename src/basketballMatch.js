import React, { Component } from 'react'

import './assets/css/footballMatch.css'
import TimeLine from './timeline';


class BasketballMatch extends Component {
    render () {
        return (
            <div className="footballMatchContainer">
                <div className="finalResultFootball">
                    <div className="matchRelatedLeague">NBA  فصل 19 - 2018</div>
                    <div className="matchRelatedTeams">
                        <div className="matchFirstTeamLogo">
                            <img src={require('./assets/img/dalas.png')} />
                        </div>
                        <div className="matchFirstTeam">
                            دالاس
                        </div>
                        <div className="matchTeamResults">
                            <div className="matchFirstTeamResult">68</div>
                            <div className="matchFinalTime">نتیجه نهایی</div>
                            <div className="matchSecondTeamResult">69</div>
                        </div>
                        <div className="matchSecondTeam">
                            کلیولند
                        </div>
                        <div className="matchSecondTeamLogo">
                            <img src={require('./assets/img/i.png')} />
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
                        <div className="matchBestPlayer">دیوید دخیا</div>
                        <div>
                           4
                        </div>
                        <div>
                            سید ناصر
                            <br/>
                            <i className="fas fa-exchange-alt">
                            </i>
                            <span className="matchSubstitutionMinute">
                                16
                            </span>
                            <span className="matchSubstitutionPlayer">
                                بارنس
                            </span>
                        </div>
                        <div>
                           12
                        </div>
                        <div>
                            برونسون
                        </div>
                        <div>
                            18
                        </div>
                        <div>
                            هریس
                        </div>
                        <div>
                           20
                        </div>
                        <div>
                           بروخف
                        </div>
                        <div>
                           14
                        </div>
                        <div>
                            پاول
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
                        <div>سکستون</div>
                        <div>
                           4
                        </div>
                        <div>
                            بارکز
                        </div>
                        <div>
                           12
                        </div>
                        <div>
                            ادل
                        </div>
                        <div>
                            18
                        </div>
                        <div>
                            کلارکسون
                        </div>
                        <div>
                           20
                        </div>
                        <div>
                           نانس
                        </div>
                        <div>
                           14
                        </div>
                        <div>
                            ممد نصرتی
                        </div>
                    </div>
                </div>
                <div className="footballMatchStatistics">
                    <div className="footballMatchStatisticsTitle">آمار بازی</div>
                    <div className="footballMatchStats">
                        <div className="footballMatchStatsDetail">
                            <div className="matchDetailFirstTeamLogo">
                                <img src={require('./assets/img/dalas.png')} />
                                <span>دالاس</span>
                            </div>
                            <div>
                            </div>
                            <div className="matchDetailSecondTeamLogo">
                                <span>کلیولند</span>
                                <img src={require('./assets/img/i.png')} />
                            </div>

                            <div>11</div>
                            <div>خطا</div>
                            <div>15</div>

                            <div>1</div>
                            <div>کارت زرد</div>
                            <div>1</div>

                            <div>0</div>
                            <div>کارت قرمز</div>
                            <div>1</div>

                            <div>4</div>
                            <div>آفساید</div>
                            <div>3</div>

                            <div>10</div>
                            <div>کرنر</div>
                            <div>3</div>
                        </div>
                        <div className="footballMatchBallPoss">
                            <div className="footballMatchFirstTeamPoss">
                                <img src={require('./assets/img/dalas.png')} />
                            </div>
                            <div className="footballMatchPoss">مالکیت توپ</div>
                            <div className="footballMatchSecondTeamPoss">
                                <img src={require('./assets/img/i.png')} />
                            </div>
                            <div>
                                %63
                            </div>
                            <div>
                                <progress value="63" max="100"></progress>
                            </div>
                            <div>
                                %37
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footballMatchTimeline">
                    <div>
                        <img src={require('./assets/img/dalas.png')} />
                        دالاس
                    </div>
                    <TimeLine time={60} />
                    <div>
                        <img src={require('./assets/img/i.png')} />
                        کلیولند
                    </div>

                </div>
                <div className="matchNews">
                    <div className="matchNewsTitle">
                        اخبار بازی
                    </div>
                    <div className="matchNewsContainer">
                        <div className="matchNewsContent">
                        <img src={require('./assets/img/manu-fulham.jpg')} />
                            <div>
                            دالاس اولین پیروزی لیگ برتر را در پنج بازی با پیروزی 4-1 راحت در برابر کلیولند پایین در اولدترافورد به دست آورد.

یك بار دیگر با پول پاگبا در نیمکت نشست، یونایتد هیچ وقت در یافتن یك ریتم شكست نیافت، زیرا اشلی یانگ اولین گل خود را در تمام رقابت ها برای یونایتد از سال 2017 به ثمر رساند تا توپ را در دقیقه 13 به پایان برساند.
                            </div>
                        </div>
                        <hr/>
                        <div className="matchNewsContent">
                            <img src={require('./assets/img/manu-fulham1.jpg')} />
                            <div>
                            خوان ماته سپس یک گل دوم را به ثمر رساند تا گل دوم خود را به ثمر برساند، در دقیقه 28، قبل از اینکه Romelu Lukaku گل اول خود را از ماه مارس به ثمر رساند تا قبل از نیمه اول گل سوم را به ثمر برساند.

    در دیدار با یک تفاوت منفی منفی، یونایتد نیاز به یک عملکرد اعتمادسازی داشت و مسابقه علیه دفاع متضاد لیگ برتر، همان چیزی بود که دکتر دستور داد.
                            </div>
                        </div>
                        <hr/>

                    </div>
                </div>
                <div className="matchLiveReport">
                    <div className="matchLiveReportTitle">
                        گزارش زنده
                    </div>
                    <div className="matchLiveReportContent">
                    دالاس در هفته های اخیر نتایج خوبی در لیگ برتر نگرفته بود اما آنها امروز با نتیجه 1-4 فولام تحت هدایت کلودیو رانیری قعرنشین را مغلوب کرده و موقتا به رتبه ششم جدول صعود کرد.
در دقایق ابتدایی اگرچه اتفاق خاصی روی دروازه ها رخ نداد اما دالاس از همان ابتدا حاکم توپ و میدان بوده و حملاتی را روی دروازه فولام ترتیب داد. اما در دقیقه 13 میزبان به گل رسید. اشلی یانگ با یک حرکت انفرادی از جناح چپ وارد محوطه جریمه شده و با یک ضربه محکم و دیدنی موفق شد گل اول یونایتد را به ثمر برساند.
                    </div>
                </div>
                <div className="matchMedia">
                    <div className="matchMediaTitle">
                        عکس‌ها و فیلم‌ها
                    </div>
                    <div className="slideshowContainer">
                        <img src={require('./assets/img/newsImage2.jpg')} />
                    </div>
                    <div className="slideshowContainer">
                       <video controls width="100%">
                            <source src={require('./assets/video/1.mp4')}/>

                       </video>
                    </div>
                    
                </div>
            </div>
    
        )
    }
}

export default BasketballMatch;