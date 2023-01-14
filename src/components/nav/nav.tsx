
import { ChatIcon, HomeIcon, LikeIcon, MagnifyingGlassIcon, NotificationIcon } from '../../assets/icons/icons';
import { Card } from '../card/card';
import './nav.scss';

export const Nav = () => {
    return(
        <header className="header">
            <div className="header__left-items">
                <div className="header__left-items--logo">
                    logo
                </div>
                <div className="header__left-items--search">
                    <input type="text" placeholder="Search" className='input'/>
                    <div className="search-icon">
                        <MagnifyingGlassIcon color={"white"} />
                    </div>
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

            <div className="header__accounts">
                <Card>accounts</Card>
            </div>

        </header>
    )
} 