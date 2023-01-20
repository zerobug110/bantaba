
import { ChatIcon, HomeIcon, LikeIcon, MagnifyingGlassIcon, NotificationIcon, UpArrowIcon } from '../../assets/icons/icons';
import { Card } from '../card/card';
import './nav.scss';
import { Navigation, Route, useLocation, useNavigate } from 'react-router-dom';

export const Nav = () => {
    const navigate = useNavigate()
    const location = useLocation()

    // const pathMatchedRoute = () => {
    //     if (route === location.pathname) 
       
    //     return true
    // }

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
                <div  className="header__nav-list--item" onClick={()=> navigate("/")}>
                    <HomeIcon/>
                </div>
                <div  className="header__nav-list--item" onClick={() => navigate("/notifications")}>
                    <NotificationIcon/>
                </div>
                <div className="header__nav-list--item" onClick={()=> navigate("/chat")}>
                    <ChatIcon/>
                </div>
            </div>

            <div className="header__accounts">
                
                <div className="header__accounts--setting">
                    <div className="profile-image">
                        <img src="https://images.unsplash.com/photo-1441974231531-c622 7db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="img" />
                    </div>
                    <span className="username">muhammed bojang</span>
                    <div className="drop-down-arrow">
                        {/* <DownArrowIcon/> */}
                        <UpArrowIcon/>
                    </div>
                </div>
            
            </div>
        </header>
    )
} 