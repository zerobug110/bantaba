import { FC } from 'react';
import { CallIcon, VideoCallIcon } from '../../assets/icons/icons';
import { Card } from '../card/card';
import './contacts-details.scss';
export const ContactDetails:FC = () => {
    return(
        <Card>
            <div className="contact-details">
                <div className="contact-details__image">
                    <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="img" />
                </div>
                <div className="contact-details__info">
                    <span className="contact-details__info--username">mariam jobe</span>
                </div>
                <div className="contact-details__actions">
                    <span className="contact-details__actions--btn">
                        <CallIcon/>
                    </span>
                    <span className="contact-details__actions--btn">
                        <VideoCallIcon />
                    </span>
                    <span className="contact-details__actions--btn">se</span>
                </div>
            </div> 
        </Card>
      
    )
}