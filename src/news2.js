import React, {Component} from 'react';
import './assets/css/news2.css';
import fix_new_lines from './utils.js';
import Comment from './comment';

export default class News extends Component {
    render() {
        return (
            <div className={'news-feed-container'}>
            <div className={'box-container'}>
                <div className={'news-title'}>{this.props.title}</div>
                <img className={'news-prev-image'} src={this.props.image_src} alt={this.props.image_alt} />
                <div className={'news-meta'}>
                    <div className={'news-date'}><i class="far fa-calendar-alt"></i>تاریخ: {this.props.date}</div>
                    <div className={'news-source'}>منبع: {this.props.source}</div>
                </div>
                <div className={'news-content'}>
                    {this.props.content.map((item, id) => {
                        if (item.type === 'heading') {
                            return (
                                <h4 key={id} className={'news-heading'}>{item.value}</h4>
                            )
                        }
                        else if (item.type === 'text') {
                            return (
                                fix_new_lines(item.value)
                            )
                        }
                        else if (item.type === 'image') {
                            return (
                                <img key={id} className={'news-image'} src={item.url} alt={item.alt} />
                            )
                        }
                    })}
                </div>
                <div className={'news-tags'}>
                    برچسب ها:&nbsp;
                    {this.props.tags.map((tag, id) => (
                        <a key={'id'} href={'#'}>{tag}</a>
                    ))}
                </div>
            </div>
            <div className={'commentNews'}>
                <div className={'commentNewsTitle'}>
                    ثبت نظر
                </div>
                <Comment/>
            </div>
            <div className="commentReaderNews">
                    <div className="commentHeader">
                        <div className="commentAuthor">
                            <i className="far fa-user"></i>
                            مصطفی قدیمی
                        </div>
                        <div className="commentDate">
                            <i className="far fa-calendar-alt"></i>
                            11 آذر 97
                        </div>
                    </div>
                    <hr/>
                    <div className="commentReaderBody">
                        بسیار عالی بود بسی لذت بردم عزیزان
                    </div>
                </div>
            </div>
        )
    }
}