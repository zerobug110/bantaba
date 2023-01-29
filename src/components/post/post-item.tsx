import { FC } from "react"
import { LikeIcon } from "../../assets/icons/icons"

export const PostItem:FC = () => {
    return (
        <div className="post__list--item">
            <div className="post-profile">
                <div className="post-profile__info">
                    <div className="post-profile__info--image">
                        <img src="https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="img" />
                    </div>
                    <div className="post-profile__info--details">
                        <div className="username">
                            elan mosk
                        </div>
                        <span className="post-timestamp">2 mins ago</span>
                    </div>
                </div>
                <div className="post-profile__options">...</div>
            </div>
            
            <div className="post-content">
                <p className="post-content__description">
                    It feels greate to have the latest version of nodejs i a really love the new features.
                </p>
                <div className="post-content__media">
                    <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="img" />
                </div>
            </div>

            <div className="post-comment">
                <div className="post-comment__reactions">
                    <div className="reaction">
                        <div className="reaction__icon">
                            <LikeIcon />
                        </div>
                        <span className="reaction__count">43</span>
                    </div>
                    <div className="reaction">
                        <div className="reaction__icon">
                            <LikeIcon />
                        </div>
                        <span className="reaction__count">43</span>
                    </div>
                    <div className="reaction">
                        <div className="reaction__icon">
                            <LikeIcon />
                        </div>
                        <span className="reaction__count">43</span>
                    </div>
                </div>
                <div className="post-comment__profile">
                    <div className="post-comment__profile--image">
                        <img src="https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="img" />
                    </div>
                    
                    <div className="post-comment__input">
                        <input type="text" name="" id="" placeholder="Write a Comment" className="input"/>
                    </div>
                </div>
            </div>
        </div>
    )
}