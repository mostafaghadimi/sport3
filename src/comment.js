import React, {Component} from 'react';
import './assets/css/comment.css';

class Comment extends Component {
    render(){
        return (
            <form class="commentSubmit">
                <div>
                    <input id="name" name="name" type="text" required autoComplete='off'/>
                    <label for="name">نام</label>
                </div>
                <div>
                    {/* TODO: email verification */}
                    <input id="email" name="email" type="email" required/>
                    <label for="email">ایمیل</label>
                </div>
                <div>
                    <textarea id="message" name="comment" required></textarea>
                    <label for="message">نظر</label>
                </div>
                <div>
                    <button className="commentSendButton">ارسال</button>
                </div>
            </form>
        )
    }
}

export default Comment;