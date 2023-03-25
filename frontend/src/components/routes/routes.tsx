import {  Route, Routes  } from "react-router-dom"
import {Nav} from '../nav/nav';
import '../../index.css'
import { lazy, Suspense,FC, useState, useEffect } from "react";
import { Spinner } from "../spinner/spinner";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "../../utils/firebase/firebase.config";
// import { AppDialog } from "../app-dialog/app-dialog";
import React from "react";

// lazy routes
const UserProfile = lazy(() => import('../../pages/user-profile/user-profile').then(({UserProfile})=> ({default: UserProfile})))
const Home = lazy(() => import('../../pages/home/home').then(({ Home }) => ({ default: Home })))
const Chat = lazy(() => import('../../pages/chat/Chat').then(({ Chat }) => ({ default: Chat })))
const Auth = lazy(()=> import ('../../pages/auth/auth').then(({Auth}) => ({default: Auth})))
const Notifications = lazy(()=> import ('../../pages/notifications/notifications').then(({Notifications})=>({default: Notifications})))
const LiveStream = lazy(()=> import('../../pages/live-stream/live-stream').then(({LiveStream}) => ({default: LiveStream})))
const ProfileSettings = lazy(()=> import('../../pages/profile-settings/profile-settings').then(({ProfileSettings})=> ({default: ProfileSettings})))

const AppRoutes:FC = () => {
    // const [user, setUser] = useState(null)
    
    // display user 
    useEffect(()=>{
        // @ts-ignore
        // setUser(auth.currentUser)
    },[])
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
                    <Route path="/live" element={<LiveStream/>}/>
                    <Route path="/profile-settings" element={<ProfileSettings/>}/>
                </Routes>
                {/* <AppDialog/> */}
               </Suspense>
               <ToastContainer/>
            </>
            
        )

        }
export default AppRoutes

