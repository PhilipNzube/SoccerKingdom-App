import { useNavigate } from 'react-router-dom';
import PhoneLockImg from './images/Phonelink Lock.png';
import EllipseImg from './images/Ellipse 6.png';
import EllipseImg2 from './images/Ellipse 5.png';

export default function LogIn() {

    const Navigate = useNavigate();

    const GoToSignUp = () => {
        Navigate("/CreateAccount");
    }

    return (
        <>
            <div id="Elilipse"><img id="EllipseImg" src={EllipseImg} alt='EllipseImg' /></div>
            <form>
                <div id="ModalContainer">
                    <div id="Modal">
                        <div id="PhoneLockImgDiv">
                            <img id="PhoneLockImg" src={PhoneLockImg} alt="PhoneLockImg" />
                        </div>

                        <div id="Credentials">
                            <div id="LogInText">Login</div>
                            <div id="InstructionText">Please sign in to continue</div>
                            <input id="EmailID" type="email" placeholder="EMAIL" />
                            <input id="PassWordID" type="password" placeholder="PASSWORD" />
                        </div>

                        <div id="Login-ForgotPassword">
                            <input id="LogInBut" type="submit" value="LOGIN" />
                            <div id="ForgotText">Forgot password?</div>
                        </div>

                        <div id="Question-SignIn">Don’t have an account?<span id="SignUp" onClick={GoToSignUp}>Sign up</span></div>
                    </div>
                </div>
            </form>
            <div id="Elilipse2"><img id="EllipseImg2" src={EllipseImg2} alt='EllipseImg2' /></div>
        </>
    )
}