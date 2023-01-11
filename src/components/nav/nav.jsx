
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
                <div className="header__nav-item">home</div>
                <div className="header__nav-item">message</div>
                <div className="header__nav-item">notifications</div>
                <div className="header__nav-item">favorites</div>
            </div>
            <div className="header__accounts">account</div>

        </header>
    )
}