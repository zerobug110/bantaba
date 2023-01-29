import { FC } from 'react';
import { Activities } from '../../components/activities/activites';
import { Post } from '../../components/post/post';
import { Profile } from '../../components/profile/profile';
import { Skills } from '../../components/skills/skills';
import './home.scss';

export const Home:FC = () => {
    return(
        <div className="home">
            
            <div className="personal">
                <Profile/>
                <Skills/>
            </div>
    
            <div className="post">
                <Post/>
            </div>

            <div className="activities-trends">
                <Activities/>
            </div>
        </div>
    )
}