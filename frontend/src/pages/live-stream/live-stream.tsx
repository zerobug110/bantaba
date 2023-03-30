import React,{ FC } from 'react';
import { ChatIcon, LikeIcon } from '../../assets/icons/icons';
import './live-stream.scss';

export const LiveStream:FC  = () => {
    return(
        <div className="live">
            <div className="live__video">
                
                {/* <h1>LiveStream</h1> */}
                <div className="live__video--frame">
                    <img src="" alt="" className="img" />
                </div>
                <div className="live__video--reaction">
                    <div className="icon">
                        <LikeIcon/>
                    </div>
                    <div className="icon">
                        <ChatIcon/>
                    </div>
                    <div className="icon">
                    <ChatIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}