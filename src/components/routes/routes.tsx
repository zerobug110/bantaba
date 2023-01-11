import { Route, Routes  } from "react-router-dom"
import { Home } from "../../pages/home";
import {Nav} from '../nav/nav';
import '../../index.css'
import { Chat } from "../../pages/Chat";
const AppRoutes = () => (
        
    <Routes>
        {/* @ts-ignore */}s
        <Route  element={<Nav/>}>        
            <Route index element={<Home/>}/>
            <Route path="/chat" element={<Chat/>}/>
        </Route>
      

    </Routes>
)
export default AppRoutes

