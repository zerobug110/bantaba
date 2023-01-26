import {  Route, Routes  } from "react-router-dom"
import {Nav} from '../nav/nav';
// import { Chat } from "../../pages/chat/Chat";
import '../../index.css'
import { lazy, Suspense } from "react";


// @type-ignore
const Home = lazy(() => import('../../pages/home/home').then(({ Home }) => ({ default: Home })))
const Chat = lazy(() => import('../../pages/chat/Chat').then(({ Chat }) => ({ default: Chat })))
const Auth = lazy(()=> import ('../../pages/auth/auth').then(({Auth}) => ({default: Auth})))
const Notifications = lazy(()=> import ('../../pages/notifications/notifications').then(({Notifications})=>({default: Notifications})))

const AppRoutes = () => {
        return(
            <>
               <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/auth" element={<Auth/>}/>
                </Routes>

                <Nav/>
                <Routes>     
                    <Route index element={<Home/>}/>
                    <Route path="/chat" element={<Chat/>}/>
                    <Route path="/notifications" element={<Notifications/>}/>
                </Routes>
               </Suspense>
            </>
            
        )

        }
export default AppRoutes

