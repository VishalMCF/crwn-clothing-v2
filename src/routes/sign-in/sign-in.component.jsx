import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {

    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <h1>Sign-In</h1>
            <button onClick={logGoogleUser}>SIGN IN WITH GOOGLE POPUP</button>
        </div>
    )
} 

export default SignIn;