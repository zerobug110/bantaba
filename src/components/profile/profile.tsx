import { Card } from '../card/card';
import './profile.scss';

export const Profile = () => {
    return(
        <Card >
            <div className="profile">
                <div className="profile__background">
                    <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" alt="" className="img" />
                </div>
                <div className="profile__info">
                  <div className="profile__info--primary">

                    <div className="followers">
                        <div className="followers__no">12k</div>
                        <div className="followers__label">followers</div>
                    </div>

                    <div className="profile-image">
                        <img src="https://images.unsplash.com/photo-1614274300320-f8d5002cf6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGJsYWNrJTIwbW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="img" />
                    </div>

                    <div className="following">
                        <div className="following__no">189</div>
                        <div className="following__label">following</div>
                    </div>
                  </div>
                </div>
                <div className="profile__about">
                    <p className="profile__about--text">i am a photographer and love to painting as well</p>
                </div>
                <div className="profile__edit">
                    <span className="profile__edit--btn">view profile</span>
                </div>
            </div>
        </Card>
    
    )
}