import React, {Component} from 'react';
import './assets/css/scores.css'
import ScorePrev from './scorepreview';
import GroupButton from './groupbutton';
import Calendar from 'react-calendar';

export default class Scores extends Component {
    render() {
        return (
            <div className={'scores-container'}>
                    <div className={'score-previews_container'}>
                        <ScorePrev home_team_name={'یوونتوس'} home_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/111.png'} home_team_page_url={'#'} away_team_name={'اینتر'} away_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/110.png'} away_team_page_url={'#'} home_team_score={'۲'} away_team_score={'۳'} isStarted={false} match_date={'۹/۲۴'} match_time={'۲۳:۳۰'} game_page_url={'#'} />
                        <ScorePrev home_team_name={'یوونتوس'} home_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/111.png'} home_team_page_url={'#'} away_team_name={'اینتر'} away_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/110.png'} away_team_page_url={'#'} home_team_score={'۲'} away_team_score={'۳'} isStarted={false} match_date={'۹/۲۴'} match_time={'۲۳:۳۰'} game_page_url={'#'} />
                        <ScorePrev home_team_name={'یوونتوس'} home_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/111.png'} home_team_page_url={'#'} away_team_name={'اینتر'} away_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/110.png'} away_team_page_url={'#'} home_team_score={'۲'} away_team_score={'۳'} isStarted={false} match_date={'۹/۲۴'} match_time={'۲۳:۳۰'} game_page_url={'#'} />
                        <ScorePrev home_team_name={'یوونتوس'} home_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/111.png'} home_team_page_url={'#'} away_team_name={'اینتر'} away_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/110.png'} away_team_page_url={'#'} home_team_score={'۲'} away_team_score={'۳'} isStarted={false} match_date={'۹/۲۴'} match_time={'۲۳:۳۰'} game_page_url={'#'} />
                        <ScorePrev home_team_name={'یوونتوس'} home_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/111.png'} home_team_page_url={'#'} away_team_name={'اینتر'} away_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/110.png'} away_team_page_url={'#'} home_team_score={'۲'} away_team_score={'۳'} isStarted={false} match_date={'۹/۲۴'} match_time={'۲۳:۳۰'} game_page_url={'#'} />
                        <ScorePrev home_team_name={'یوونتوس'} home_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/111.png'} home_team_page_url={'#'} away_team_name={'اینتر'} away_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/110.png'} away_team_page_url={'#'} home_team_score={'۲'} away_team_score={'۳'} isStarted={false} match_date={'۹/۲۴'} match_time={'۲۳:۳۰'} game_page_url={'#'} />
                        <ScorePrev home_team_name={'یوونتوس'} home_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/111.png'} home_team_page_url={'#'} away_team_name={'اینتر'} away_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/110.png'} away_team_page_url={'#'} home_team_score={'۲'} away_team_score={'۳'} isStarted={false} match_date={'۹/۲۴'} match_time={'۲۳:۳۰'} game_page_url={'#'} />
                        <ScorePrev home_team_name={'یوونتوس'} home_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/111.png'} home_team_page_url={'#'} away_team_name={'اینتر'} away_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/110.png'} away_team_page_url={'#'} home_team_score={'۲'} away_team_score={'۳'} isStarted={false} match_date={'۹/۲۴'} match_time={'۲۳:۳۰'} game_page_url={'#'} />
                        <ScorePrev home_team_name={'یوونتوس'} home_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/111.png'} home_team_page_url={'#'} away_team_name={'اینتر'} away_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/110.png'} away_team_page_url={'#'} home_team_score={'۲'} away_team_score={'۳'} isStarted={false} match_date={'۹/۲۴'} match_time={'۲۳:۳۰'} game_page_url={'#'} />
                        
                    </div>
                    <div className={'scores-options active'}>
                        <GroupButton className={'active'} type={'radio'} items={[{text: 'همه بازی ها'}, {text: 'مورد علاقه ها'}]} color={'red'} />
                        <Calendar className={'scores-calendar'} />
                    </div>
            </div>
        )
    }
}