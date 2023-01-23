import { Card } from '../card/card';
import './activies.scss';

export const Activities = () => {
    return(
        <Card>
            <div className="activities">
                <div className='activities__heading'>trends for you</div>
            </div>
            <div className="trend-list">
                <div className="trend-list__item">
                    football
                </div>
            </div>
        </Card>
     
    )
}