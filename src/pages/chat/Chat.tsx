import { ChatList } from '../../components/chats/chat-message';
import { ContactDetails } from '../../components/contact-details/contacts-details';
import { ContactList } from '../../components/contacts/contact-list';
import './chat.scss';
export const Chat = () => {
    return(
        <div className="chat-container">
              <div className="chat-container__contacts">
                <ContactList />
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