import { Card } from '../card/card';
import './profile.scss';

export const Profile = () => {
    return(
        <Card >
            <div className="profile">
                <div className="profile__background">
                    
                </div>
                <div className="profile__info">
                  <div className="profile__info--primary">

                    <div className="followers">
                        <div className="followers__no">12k</div>
                        <div className="followers__label">followers</div>
                    </div>

                    <div className="profile-image">
                        <img src="" alt="" className="img" />
                    </div>

                    <div className="following">
                        <div className="following__no">189</div>
                        <div className="following__label">following</div>

                    </div>

                  </div>
                </div>
            </div>
        </Card>
    
    )
}