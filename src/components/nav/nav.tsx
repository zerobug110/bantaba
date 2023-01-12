
import { ChatIcon, HomeIcon, LikeIcon, NotificationIcon } from '../../assets/icons/icons';
import './nav.scss';

export const Nav = () => {
    return(
        <header className="header">
            <div className="header__left-items">
                <div className="header__left-items--logo">
                    logo
                </div>
                <div className="header__left-items--search">
                    search
                </div>
            </div>
            <div className="header__nav-list">
                <div className="header__nav-list--item">
                    <HomeIcon/>
                </div>
                <div className="header__nav-list--item">
                    <LikeIcon/>
                </div>
                <div className="header__nav-list--item">
                    <NotificationIcon/>
                </div>
                <div className="header__nav-list--item">
                    <ChatIcon/>
                </div>
            </div>
            <div className="header__accounts">account</div>

        </header>
    )
}