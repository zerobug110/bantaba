import {  Route, Routes  } from "react-router-dom"
import {Nav} from '../nav/nav';
import '../../index.css'
import { Chat } from "../../pages/chat/Chat";
import { Home } from "../../pages/home/home";
import { Notifications } from "../../pages/notifications/notifications";
import { Auth } from "../../pages/auth/auth";
// import '../../App.scss';

const AppRoutes = () => {
        return(
            <>
                <Nav/>
                <Routes>     
                    <Route index element={<Home/>}/>
                    <Route path="/chat" element={<Chat/>}/>
                    <Route path="/notifications" element={<Notifications/>}/>
                    <Route path="/auth" element={<Auth/>}/>
                </Routes>
            </>
            
        )

        }
export default AppRoutes

