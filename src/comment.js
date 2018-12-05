import React, {Component} from 'react';
import './assets/css/comment.css';

class Comment extends Component {
    render(){
        return (
            <form class="commentSubmit">
                <div>
                    <input id="name" name="name" type="text" required autoComplete='off' placeholder="نام"/>
                    <label for="name">نام</label>
                </div>
                <div>
                    {/* TODO: email verification */}
                    <input id="email" name="email" type="email" required placeholder="ایمیل"/>
                    <label for="email">ایمیل</label>
                </div>
                <div>
                    <textarea id="message" name="comment" required placeholder="متن نظر"></textarea>
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