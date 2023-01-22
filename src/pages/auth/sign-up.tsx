// import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
// import {db} from '../../utils/firebase/firebase.config'

import { useState } from "react"
import { AppleIcon, GoogleIcon, MailIcon } from "../../assets/icons/icons"


import ViewSlider from 'react-view-slider'

export const SignUp = () => {
    enum STEPS {
        UPLOAD_IMAGE = 0,
        SHARE_POST = 1,
    }
    const [step, setStep] = useState(0);
    const [showPassword, setShowPassword] = useState('')
    const handleShowPassword = () => {
        setShowPassword((prevState):string | any => !prevState)
    }

    const VIEWS = [
		({ index, active, transitionState }:any) => (
			<section
				className="first-slide slider"
				hidden={index !== STEPS.UPLOAD_IMAGE}
			>
				<div>
					<div className="slider-header">
						{/* <button onClick={() => handleClose()}> */}
							<span className="app-icon">
								{/* <CloseIcon></CloseIcon> */}
							</span>
						{/* </button> */}
						<button className="slider-movement" onClick={() => setStep(1)}>
							Next
						</button>
					</div>
					{/* <PostMediaForm user={app.user}></PostMediaForm> */}
				</div>
			</section>
		),
		({ index, active, transitionState }:any) => (
			<section
				className="secound-slide slider"
				hidden={index !== STEPS.SHARE_POST}
			>
				<div className="slider-header">
					<button onClick={() => setStep(0)}>
						<span className="app-icon">
							{/* <BackIcon></BackIcon> */}
						</span>
					</button>
				</div>
			</section>
		),
	];

	const viewToRender = VIEWS[step];

    return(
        <div className="sign-up">
            <ViewSlider
					// renderView={viewToRender}
					numViews={2}
					// activeView={step}
				></ViewSlider>

            <form action="" className="sign-up__form">
            <div className="sign-up__form--input">
                    <input type="text" name="username" id="" className="input" placeholder="name"/>
                </div>
                <div className="sign-up__form--input">
                    <input type="text" name="username" id="" className="input" placeholder="username"/>
                </div>
                <div className="sign-up__form--input">
                    <input type="email" name="email" id="" className="input" placeholder="Email"/>
                </div>
                <div className="sign-up__form--input">
                    <input type={showPassword ? 'text' : 'password'} name="password" id="" className="input" placeholder="Password"/>
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