// import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
// import {db} from '../../utils/firebase/firebase.config'
export const SignUp = () => {
    return(
        <div className="sign-up">
            <h3>sign up</h3>
            <form action="" className="sign-up__forn">
                <div className="sign-up__form--input">
                    <input type="text" name="email" id="" className="input"/>
                </div>
                <div className="sign-up__form--input">
                    <input type="text" name="password" id="" className="input"/>
                </div>

                <button className="sign-up__submit-btn">submit</button>
            </form>
        </div>
    )
}