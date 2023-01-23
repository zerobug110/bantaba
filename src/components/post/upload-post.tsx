import { ImageIcon, VideoIcon } from '../../assets/icons/icons';
import './post-style.scss';
export const UploadPost = () => {
    return (
        <div className="post__upload--item">
            <div className="profile-input">
                <div className="profile">
                    <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="img" />
                </div>
                <textarea name="" id="" placeholder="Tell your thought to your friends..."  className="input"/>
            </div>
            <div className="upload-functionalities">
                <div className="upload-functionalities__upload-btns">
                    <div className="upload-image">
                        <div className="image-icon">
                            <ImageIcon/>
                        </div>
                    <span className="label">image</span>
                </div>
                    <div className="upload-video">
                        <div className="video-icon">
                            <VideoIcon/>
                        </div>
                        <span className="label">video</span>
                    </div>    
                </div>
                <div className="post-btn">post</div>                
            </div>

        </div>
    
    )
}