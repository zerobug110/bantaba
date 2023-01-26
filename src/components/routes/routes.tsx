import {  Route, Routes  } from "react-router-dom"
import {Nav} from '../nav/nav';
import '../../index.css'
// import { Chat } from "../../pages/chat/Chat";
// import { Home } from "../../pages/home/home";
import { Notifications } from "../../pages/notifications/notifications";
import { Auth } from "../../pages/auth/auth";
import { lazy } from "react";
// import '../../App.scss';


// @type-ignore
// const Home = lazy(()=> import ('../../pages/home/home'))
const Home = lazy(() => import('../../pages/home/home').then(({ Home }) => ({ default: Home })))

const Chat = lazy(() => import('../../pages/chat/Chat').then(({ Chat }) => ({ default: Chat })))

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

