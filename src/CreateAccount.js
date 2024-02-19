import { useNavigate } from 'react-router-dom';
import BackImg from './images/Group 21.png';
import EllipseImg from './images/Ellipse 6.png';
import EllipseImg2 from './images/Ellipse 5.png';

export default function CreateAccount() {

    const Navigate = useNavigate();

    const GoToSignIn = () => {
        Navigate("/");
    }

    return (
        <>
            <div id="Elilipse"><img id="EllipseImg" src={EllipseImg} alt='EllipseImg' /></div>
            <form>
                <div id="ModalContainer">
                    <div id="Modal">
                        <div id="BackImgDiv">
                            <img id="BackImg" src={BackImg} alt="BackImg" onClick={GoToSignIn} />
                        </div>

                        <div id="Credentials2">
                            <div id="CAText">Create Account</div>
                            <div id="InstructionText">Please sign in to continue</div>
                            <input id="FullNameID" type="text" placeholder="FULL NAME" />
                            <input id="PhoneID" type="number" placeholder="PHONE" />
                            <input id="EmailID" type="email" placeholder="EMAIL" />
                            <input id="PassWordID" type="password" placeholder="PASSWORD" />
                            <input id="ConfirmPassWordID" type="password" placeholder="CONFIRM PASSWORD" />
                        </div>

                        <div id="Login-ForgotPassword2">
                            <input id="LogInBut" type="submit" value="SIGN UP" />
                        </div>

                        <div id="Question-SignIn2">Already haven an account?<span id="SignUp" onClick={GoToSignIn}>Sign in</span></div>
                    </div>
                </div>
            </form>
            <div id="Elilipse2"><img id="EllipseImg2" src={EllipseImg2} alt='EllipseImg2' /></div>
        </>
    )
}