import LoginPage from "../components/LoginPage";
import SignUpPage from "../components/SignUpPage";
import { useParams } from "react-router-dom";
const Auth=()=>{
    const params = useParams();
    return (
      params.authtype === "login" ? <LoginPage/> : <SignUpPage/>
    )
}
export default Auth;