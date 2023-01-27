import './user-profile.scss';

export const UserProfile = () => {
    return (
        <div className="user-profile-content">
            <div className="user-profile">
                <div className="user-profile__background">
                    <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" alt="" className="img" />
                </div>
                <div className="user-profile__details">
                    <div className="user-profile__details--image">
                        <img src="https://images.unsplash.com/photo-1614274300320-f8d5002cf6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGJsYWNrJTIwbW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="img" />
                    </div>
                    <div className="user-profile__details--info">
                        <div className="user">
                            <h3 className="user__name">Muhammed Bojang</h3>
                            <div className="user__username">zerobug110</div>
                        </div>
                        {/* <div className="activities">
                            <div className="send-message">
                                message
                            </div>
                            <div className="add-follower">add follower</div>
                        </div> */}
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}