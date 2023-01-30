import { FC } from 'react';
import { Card } from '../card/card';
import './activies.scss';

export const Activities:FC = () => {
    return(
        <Card>
            
            <div className="activities">
                <div className='activities__heading'>trends for you</div>
                <div className="trend-list">
                {[0,1,2,3,4,5].map(item => (
                <div className="trend-list__item">
                    <div className="trends">
                        <div className="trends-header">#arsenal</div>
                        <span className="trends-count">12k reactions</span>
                    </div>
                    <div className="span">...</div>

                </div> 
                ))
                }
            </div>
            </div>
            
        </Card>
     
    )
}