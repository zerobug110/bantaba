import { FC } from 'react';
import { SendIcon } from '../../assets/icons/icons';
import './chat-message.scss';
import React from 'react';

export const ChatList:FC = () => {
    return(
        <div className="chat">
            <div className="chat__list">
                <div className="chat__list--sent">
                    <span className="sent-message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dicta itaque laudantium at enim reprehenderit, adipisci esse. Velit quas perferendis fugiat architecto quidem, non sint, odio eius esse laudantium vitae?
                    </span>
                    <div className="time">1 min ago</div>
                </div>
                <div className="chat__list--received">
                    <span className="received-message">
                    Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur dolor sit amet consectetur dolor sit amet consectetur 
                    </span>
                    <div className="time">1 min ago</div>
                </div>

                <div className="chat__list--sent">
                    <span className="sent-message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dicta itaque laudantium at enim reprehenderit, adipisci esse. Velit quas perferendis fugiat architecto quidem, non sint, odio eius esse laudantium vitae?
                    </span>
                    <div className="time">1 min ago</div>
                </div>
                <div className="chat__list--sent">
                    <span className="sent-message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dicta itaque laudantium at enim reprehenderit, adipisci esse. Velit quas perferendis fugiat architecto quidem, non sint, odio eius esse laudantium vitae?
                    </span>
                    <div className="time">1 min ago</div>
                </div>
            </div>
            <div className="chat__input">
                <textarea  name="" id="" className='chat__input--input' placeholder="write message "/>
                <div className="chat__input--image">
                    <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="img" />
                </div>
                <div className="send-btn">
                    <SendIcon/>
                </div>
            </div>
        </div>
    )
}