import { ChatList } from '../../components/chats/chat-message';
import { ContactDetails } from '../../components/contact-details/contacts-details';
import { ContactList } from '../../components/contacts/contact-list';
import './chat.scss';
import { Data } from '../../components/data/data';
import { FC } from 'react';

export const Chat:FC = () => {
  console.log(Data)

  // let Data = data
    return(
        <div className="chat-container">
              <div className="chat-container__contacts">
                			{/* @ts-ignore */}
                <ContactList Data= {Data}/>
              </div>
              <div className="chat-container__message">
                <ChatList />
              </div>

              <div className="chat-container__contact-details">
                <ContactDetails />
              </div>
        </div>
      
    )
}