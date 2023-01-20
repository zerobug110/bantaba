import { Outlet, Route, Routes  } from "react-router-dom"
import {Nav} from '../nav/nav';
import '../../index.css'
import { Chat } from "../../pages/chat/Chat";
import { Home } from "../../pages/home/home";
import { Notifications } from "../../pages/notifications/notifications";
// import '../../App.scss';

const AppRoutes = () => {
        return(
            <>
                <Nav/>
                
                {/* <div className="">
                    <Outlet/>
                </div> */}

                <Routes>     
                    <Route index element={<Home/>}/>
                    <Route path="/chat" element={<Chat/>}/>
                    <Route path="/notifications" element={<Notifications/>}/>
                </Routes>
            </>
            
        )

        }
export default AppRoutes

