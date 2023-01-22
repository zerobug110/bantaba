// import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
// import {db} from '../../utils/firebase/firebase.config'

import { useState } from "react"
import { AppleIcon, GoogleIcon, MailIcon } from "../../assets/icons/icons"


export const SignUp = () => {
    const [showPassword, setShowPassword] = useState('')
    const handleShowPassword = () => {
        setShowPassword((prevState):string | any => !prevState)
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const {name,email, password} = formData
    
    const onChange = (e:string | any) => {
        setFormData((prevState):any=> ({
            [e.target.id]: e.target.value       
        }))
    }
    return(
        <div className="sign-up">
            <form action="" className="sign-up__form">
            <div className="sign-up__form--input">
                    <input type="text" name="username" id="name" className="input" placeholder="name"/>
                </div>
                <div className="sign-up__form--input">
                    <input type="text" name="username" id="" className="input" placeholder="username"/>
                </div>
                <div className="sign-up__form--input">
                    <input type="email" name="email" id="email" value={email} className="input" placeholder="Email"/>
                </div>
                <div className="sign-up__form--input">
                    <input 
                        type={showPassword ? 'text' : 'password'} 
                        name="password" 
                        id="password" 
                        value={password} 
                        className="input" 
                        placeholder="Password"
                        onChange={(e)=> {onChange(e)}}
                    />
                    <span onClick={()=> {handleShowPassword()}}>show password</span>
                </div>

                <button className="sign-up__submit-btn">sign up</button>
                <span className="sign-up__with-google">
                    {/* <GoogleIcon />  */}
                </span>
                {/* <div className="sign-up__with-social-media">
                    <div className="icon">
                        <AppleIcon /> 
                    </div>
                    <div className="icon">
                        <MailIcon /> 
                    </div>

                </div> */}
            </form>
        </div>
    )
}