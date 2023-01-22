import { useState } from 'react';
import './auth.scss'
import { SignIn } from './sign-in'
import { SignUp } from "./sign-up"

import ViewSlider from 'react-view-slider'
import { CloseIcon } from '../../assets/icons/icons';

export const Auth = () => {
    enum STEPS {
        UPLOAD_IMAGE = 0,
        SHARE_POST = 1,
    }
    const [step, setStep] = useState(0);

    const VIEWS = [
		({ index, active, transitionState }:any) => (
			<section
				className="first-slide slider"
				hidden={index !== STEPS.UPLOAD_IMAGE}
			>
				<div>
					<div className="slider-header">
							<span className="app-icon">
								{/* <CloseIcon></CloseIcon> */}
							</span>
						<button className="slider-movement" onClick={() => setStep(1)}>
							Next
						</button>

					</div>
				</div>
                <SignUp />
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
                            back
						</span>
					</button>
				</div>

            <SignIn />
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