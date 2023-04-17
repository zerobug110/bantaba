import { FC, useState } from 'react';
import './auth.scss'
import { SignIn } from './sign-in'
import { SignUp } from "./sign-up"

import ViewSlider from 'react-view-slider'
import React from 'react';

export const Auth:FC = () => {
    enum STEPS {
        SIGN_IN = 0,
        SIGN_UP = 1,
    }

    const [step, setStep] = useState(0);

	
    const VIEWS = [
		({ index, active, transitionState }:any) => (
			<section
				className="auth"
				hidden={index !== STEPS.SIGN_IN}
			>
				{/* @ts-ignore */}
                <SignIn setStep={setStep}/>
			</section>
		),
		({ index, active, transitionState }:any) => (
			<section
				className="auth"
				hidden={index !== STEPS.SIGN_UP}
			>
			{/* @ts-ignore */}
            <SignUp setStep= {setStep}/>
			</section>
		),
	];

	const viewToRender = VIEWS[step];

    return (
        <div className="auth">
            <ViewSlider
					renderView={viewToRender}
					numViews={2}
					activeView={step}
				></ViewSlider>
        </div>
    )
}