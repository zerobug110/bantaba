import { Outlet, Route, Routes  } from "react-router-dom"
import { Home } from "../../pages/home";
import {Nav} from '../nav/nav';
import '../../index.css'
import { Chat } from "../../pages/Chat";
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
                </Routes>
            </>
            
        )

        }
export default AppRoutes

