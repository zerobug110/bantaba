import {  Route, Routes  } from "react-router-dom"
import {Nav} from '../nav/nav';
import '../../index.css'
import { lazy, Suspense,FC } from "react";
import { Spinner } from "../spinner/spinner";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// lazy routes
const UserProfile = lazy(() => import('../../pages/user-profile/user-profile').then(({UserProfile})=> ({default: UserProfile})))
const Home = lazy(() => import('../../pages/home/home').then(({ Home }) => ({ default: Home })))
const Chat = lazy(() => import('../../pages/chat/Chat').then(({ Chat }) => ({ default: Chat })))
const Auth = lazy(()=> import ('../../pages/auth/auth').then(({Auth}) => ({default: Auth})))
const Notifications = lazy(()=> import ('../../pages/notifications/notifications').then(({Notifications})=>({default: Notifications})))

const AppRoutes:FC = () => {
        return(
            <>
               <Suspense fallback={<Spinner/>}>
                <Routes>
                    <Route path="/auth" element={<Auth/>}/>
                </Routes>

                <Nav/>
                <Routes>     
                    <Route index element={<Home/>}/>
                    <Route path="/chat" element={<Chat/>}/>
                    <Route path="/notifications" element={<Notifications/>}/>
                    <Route path="/user-profile" element={<UserProfile/>}/>
                </Routes>
               </Suspense>
               <ToastContainer/>
            </>
            
        )

        }
export default AppRoutes

