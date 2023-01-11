import { Card } from '../components/card/card';
import './home.scss';

export const Home = () => {
    return(
        <div className="home">
            <div className="profile">
                 {/* @ts-ignore */}
                <Card >
                    <div className=""> profile</div>
                </Card>
                
            </div>
            <div className="post">post</div>

            <div className="activitites">activies</div>
        </div>
    )
}