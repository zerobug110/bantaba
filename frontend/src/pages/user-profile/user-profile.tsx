import './user-profile.scss';
import { PostItem } from '../../components/post/post-item';
import '../../components/post/post-style.scss'
import { Card } from '../../components/card/card';
import React from 'react';

export const UserProfile = () => {
    return (
        <div className="user-profile-content">
            <div className="user-profile">
                <div className="user-profile__background">
                    <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" alt="" className="img" />
                </div>
                <div className="tags-container">
                    <div className="tags-container__list">
                        <span className="tags-container__list--item">posts</span>
                        <span className="tags-container__list--item">likes & comments</span>
                        <span className="tags-container__list--item">media</span>
                    </div>   
                    <div className="follow-link">follow</div>
                    
                </div>
            
                <div className="user-profile__details">
                    <div className="user-profile__details--image">
                        <div className="image-container">
                            <img src="https://images.unsplash.com/photo-1614274300320-f8d5002cf6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGJsYWNrJTIwbW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="img" />
                        </div>
                        <div className="user-profile__details--info">
                            <div className="user">
                                <h3 className="user__name">Muhammed Bojang</h3>
                                <div className="user__username">@zerobug110</div>
                                <div className="user__status">"on vacation. can't reply to your messages"</div>
                            </div>

                         </div>
                    </div>
                    
                    <div className="user-posts">
                        <div className="post__list">
                        {[0,1,2,3].map(item => (
                            <Card>
                                <PostItem/>
                            </Card>
                        ))} 
                        </div>
                    </div>
                     <div className="mutual-friends">
                        <Card>
                            <div className="mutual-friends__list">
                                {[0,1,2,3].map(item=> (
                                    <div className="mutual-friends__list--item">
                                        <div className="profile">
                                            <div className="profile__image">
                                                <img src="" alt="" className="img" />
                                            </div>
                                            <div className="username">ebrima nyassi</div>
                                        </div>
                                        <div className="mutual-actions">
                                            <div className="follow">follow</div>
                                            <div className="ignore">ignore</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>       
                </div>
            </div>
        </div>
    )
}