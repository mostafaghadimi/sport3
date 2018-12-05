import React, { Component } from 'react';
import './assets/css/news.css';
import Comment from './comment.js'


class News extends Component {
    render () {
        return (
            <div className="newsContainer">
                <div className="news">
                    <div className="newsTitle">
                        اوس اکبر در سفر به خاور دور
                    </div>
                    <hr/>
                    <div className="newsPhoto">
                        <img src={require('./assets/img/newsImage.jpg')}/>
                    </div>
                    <div className="newsContent">
                        Lorem ipsum dolor sit amet, mea cu atqui mundi habemus. At sed eirmod delectus conceptam, ius ei laoreet salutatus. Pro inani detraxit ut, ea neglegentur complectitur vel. Usu enim ferri te, in vel enim vivendo. Fuisset accumsan ne vel, te est meis ullum ceteros. Delenit dignissim sea ad, minim efficiantur ex cum.

                        Ei ius congue epicurei, modo aperiam commune ad cum. Te habeo iriure dissentiunt pri, nostro bonorum at pri, eu feugiat mediocrem deterruisset eos. Ea iisque detraxit partiendo eam. At dolore dissentiunt eum, id feugiat rationibus delicatissimi nec. Id autem velit est.

                        Pri laoreet graecis at, regione discere complectitur ad usu. An movet audire eleifend vel, et ius veritus legendos moderatius. Eripuit perpetua repudiare id has, delenit dignissim id pro, labores platonem iracundia te has. Mel commodo corrumpit an. Quo ne case dicit contentiones, ne ius prompta definiebas. Te malorum nostrud duo, clita utamur te duo, ut soleat legimus pro.

                        Altera viderer molestie ne usu, in impedit propriae perpetua duo. Idque bonorum ponderum pro ei, hendrerit assentior sit ei, ei everti eirmod suscipiantur sea. Ad duo nobis theophrastus. Pri sint similique ea. Dicat assum an sea, cum cu simul luptatum.

                        Scripta liberavisse qui ex, case oportere ea vis, his expetenda theophrastus complectitur eu. Reprimique definitionem cu quo. Te mollis persecuti nam, ea facete apeirian electram sea, clita affert in vix. Malorum iracundia nam eu, vix at repudiare posidonium, cum ludus noluisse persecuti ut. Sit an assum legendos, cu eos simul aliquip vivendo. Id mei suas agam admodum, sed nulla intellegam at.

                        Per amet enim illum ex, sed ne quodsi alterum. Duo ut euismod habemus, vel modo electram at, at pro etiam essent neglegentur. Wisi illud periculis ei per, adipiscing sadipscing ei usu. Te homero phaedrum antiopam cum, pri quando sensibus te. Semper principes at eam, ei dicit eligendi eloquentiam sea. Affert comprehensam est no, sed no justo congue invenire.

                        Ius nostro nostrud suscipit id. Utroque perfecto ne quo, ex per quodsi causae aperiri. Reque persecuti cu eos, natum aliquando at sea, cu quo option appareat consectetuer. Has cibo tation at, meliore evertitur an vix, dico expetenda definitiones ad pro.

                        Duo et congue praesent omittantur, rebum aperiam ne mei. Mel dicant alterum ne, ut sea liber efficiendi, cu sed malorum sensibus voluptatibus. Putent feugiat ad est. Eu prompta vivendo aliquando usu, enim omnis augue ei eos, mucius ornatus utroque duo te. Ad mel verear nominati contentiones.

                        Nihil menandri dissentias an nec, dicat saepe facilisis an cum. His alii magna vulputate id. Fugit iisque virtute vel eu. Ius cu illum possit. Exerci quaerendum sea ne, ut sed illum everti invenire, vix modo mentitum menandri eu.

                        Dolorum perfecto scriptorem vix cu. Option apeirian pro no, nisl graece principes pro no. Dicta mundi his cu. Sit animal partiendo ad, option qualisque at mea. Dicunt senserit no sea, harum prodesset similique an eos. Vix nullam debitis cu, solum mandamus ea eum, choro officiis an pri. In eius movet efficiendi mei, sea putant gubergren at, pro no quot efficiantur.
                    </div>
                    <div className="newsFooter"></div>
                </div>
                <div className="commentNews">
                    <div className="commentNewsTitle">
                        ثبت نظر
                    </div>
                    <Comment/>
                </div>
            </div>
        )
    }
}

export default News
