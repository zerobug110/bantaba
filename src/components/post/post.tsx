import { Card } from "../card/card"
import './post.scss';

export const Post = () => {
    return(
        <div className="post">
            <div className="post__status">
                {[0,1,2,3,4,5,6].map(item =>(
                    <div className="post__status--item"></div>                    
                ))

                }

            </div>
            <Card>
                <div className="post__upload"></div>
            </Card>
            <div className="post__list">
                 <Card >
                    post 1
                </Card>
            </div>
           
        </div>
        
    )
}