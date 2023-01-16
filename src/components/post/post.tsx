import { Card } from "../card/card"
import { PostItem } from "./post-item";
import { PostStatus } from "./post-status";
import './post-style.scss';
import { UploadPost } from "./upload-post";

export const Post = () => {
    return(
        <div className="post">
            {/* status */}
            <div className="post__status">
                {[0,1,2,3,4,5,6,7].map(item =>(
                    <PostStatus/>
                
                ))}
            </div>

            {/* upload post component */}
            <div className="post__upload">
                <Card>
                    <UploadPost/>
                </Card>
            </div>

            {/* postlist component */}
            <div className="post__list">
                {[1,2,3].map(item => (
                    <Card >
                        <PostItem/>
                    </Card>
                ))}   
            </div>
        </div>
    )
}