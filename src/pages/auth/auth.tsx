import './auth.scss'
import { SignIn } from './sign-in'
import { SignUp } from "./sign-up"

export const Auth = () => {
    return (
        <div className="auth">
            <SignUp />
            <SignIn />
        </div>
    )
}