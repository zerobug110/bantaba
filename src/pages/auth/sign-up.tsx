

import {
    createUserWithEmailAndPassword,
    updateProfile,
  } from 'firebase/auth'
import { FC, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { AppleIcon,  VisibleIcon, } from '../../assets/icons/icons';
import {auth} from '../../utils/firebase/firebase.config'


export const  SignUp:FC = ({setStep}:any) => {

    const [showPassword, setShowPassword] = useState('')
    const handleShowPassword = () => {
        setShowPassword((prevState):string | any => !prevState)
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',    
    })

    const {name, email, password } = formData

    const onChange = (e:any) => {
        setFormData((prevState):any=> ({
            ...prevState,
            [e.target.id]: e.target.value       
        }))
    }

    const navigate = useNavigate();
    
    const register = async (e:any) => {
        e.preventDefault()

        try {
            // @ts-ignore
            // const auth = getAuth()
            const userCrediantials = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCrediantials.user

            console.log("User created successfully:", user.email);

            // @ts-ignore
            updateProfile(auth.currentUser , {
                displayName: name,
            })
    
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="sign-up">
            <form action="" className="sign-in__form" >
                <h3 className="sign-in__label">sign up</h3>
                <div className="sign-in__form--input">
                    <input 
                        type="text" 
                        name="name"
                        value={name} 
                        id="name" 
                        className="input" 
                        placeholder="Name"
                        onChange={onChange}
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
                        onChange={onChange}
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

{/* @ts-ignore */}
                <button className="sign-in__submit-btn" onClick={register}>sign up</button>
                <span className="sign-in__with-google">
                    {/* <GoogleIcon />  */}
                </span>
                {/* <h5 className="sign-in__with-label">sign in with </h5>
                <div className="sign-in__with-social-media">
                    <div className="icon">
                        <AppleIcon /> 
                    </div>
                    <div className="icon">
                        <AppleIcon /> 
                    </div>

                </div> */}
                <h5 className="create-account-btn" onClick={()=> setStep(0)}>Aready have an account. sign in</h5>
            </form>
        </div>
    )
}


