

// import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
// import {db} from '../../utils/firebase/firebase.config'

import { useState } from "react"
import { AppleIcon, GoogleIcon, MailIcon, VisibleIcon, } from '../../assets/icons/icons';


export const  SignUp = ({setStep}:any) => {
    const [showPassword, setShowPassword] = useState('')
    const handleShowPassword = () => {
        setShowPassword((prevState):string | any => !prevState)
    }

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const {email, password} = formData
    const onChange = (e:string | any) => {
        setFormData((prevState):any=> ({
            [e.target.id]: e.target.value       
        }))
    }

    return (
        <div className="sign-up">
            <form action="" className="sign-in__form">
                <h3 className="sign-in__label">sign up</h3>
                <div className="sign-in__form--input">
                    <input 
                        type="text" 
                        name="username" 
                        id="" 
                        className="input" 
                        placeholder="Name"
                    />
                </div>
                <div className="sign-in__form--input">
                    <input 
                        type="text" 
                        name="username" 
                        id="" 
                        className="input" 
                        placeholder="Username"
                    />
                </div>
                <div className="sign-in__form--input">
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email} 
                        className="input" 
                        placeholder="Email"
                    />
                </div>
                <div className="sign-in__form--input">
                    <input 
                        type={showPassword ? 'text' : 'password'} 
                        name="password" 
                        id="password" 
                        value={password} 
                        className="input password-input" 
                        placeholder="Password"
                        onChange={(e)=> {onChange(e)}}
                        
                    ></input>
                    <span onClick={()=> {handleShowPassword()}} className ="visible-icon">
                        {/* <VisibleIcon/> */}
                        <AppleIcon/>
                    </span>
                </div>

                <button className="sign-in__submit-btn">sign up</button>
                <span className="sign-in__with-google">
                    {/* <GoogleIcon />  */}
                </span>
                <h5 className="sign-in__with-label">sign in with </h5>
                <div className="sign-in__with-social-media">
                    <div className="icon">
                        <AppleIcon /> 
                    </div>
                    <div className="icon">
                        <AppleIcon /> 
                    </div>

                </div>
                <h5 className="create-account-btn" onClick={()=> setStep(0)}>Aready have an account. sign in</h5>
            </form>
        </div>
    )
}


