import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import { useParams } from "react-router-dom";
const Auth=()=>{
    const params = useParams();
    return (
      params.authtype === "login" ? <LoginPage/> : <SignUpPage/>
    )
}
export default Auth;