
import { Card } from '../card/card';
import './contact-list.scss';
export const ContactList = ({Data}:any) => {

    return(
        <Card>
            <div className="contact-list">
                <h4 className="contact-list__heading">friends</h4>
                {Data.map((item: { name: string }) => (
                    
                    <div className="contact-list__item">
                        <div className="contact-list__item--details">
                            <div className="contact-list__item--image">
                                <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="img" />
                            </div>
                            <div className="contact-list__item--username">{item.name}</div>
                        </div>
                        <div className="contact-list__item--unread-number"></div>
                    </div>
                ))}

            </div>
        </Card>
        
    )
}