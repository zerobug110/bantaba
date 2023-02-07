

import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { FC, useState } from "react"
import { AppleIcon,  VisibleIcon, } from '../../assets/icons/icons';
// import { auth, createUserWithEmailAndPassword  } from '../../utils/firebase/firebase.config';


export const  SignUp:FC = ({setStep}:any) => {

    const [showPassword, setShowPassword] = useState('')
    const handleShowPassword = () => {
        setShowPassword((prevState):string | any => !prevState)
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        username: ''
        
    })



    const {email, password, name, username} = formData

    const onChange = (e:string | any) => {
        setFormData((prevState):any=> ({
            [e.target.id]: e.target.value       
        }))
    }

    const onSubmit = async (e:any) => {
        
        e.preventDefault()
        try {
            const auth = getAuth()
            const userCrediantials = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCrediantials.user

            // @ts-ignore
            updateProfile(auth.currentUser , {
                displayName: name,
            })
            // navigate("/"):
        } catch (error) {
            console.log(error)
        }
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });

    return (
        <div className="sign-up">
            <form action="" className="sign-in__form" onSubmit={onSubmit}>
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

{/* @ts-ignore */}
                <button className="sign-in__submit-btn" onClick={createUserWithEmailAndPassword}>sign up</button>
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


