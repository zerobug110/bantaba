export const PostItem = () => {
    return (
        <div className="post__list--item">
            <div className="post-profile">
                <div className="post-profile__info">
                    <div className="post-profile__info--image">
                        <img src="" alt="" className="img" />
                    </div>
                    <div className="post-profile__info--username">elan mosk</div>
                </div>
                <div className="post-profile__options">...</div>
            </div>
            <div className="post-timestamp">2 mins ago</div>
            
            <div className="post-content">
                <p className="post-content__description">
                    It feels greate to have the latest version of nodejs i a really love the new features.
                </p>
                <div className="post-content__media">
                    <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="img" />
                </div>
            </div>
            
        </div>
    )
}