import { useSearchParams } from "react-router-dom";
import classes from "./Auth.module.css";

const Auth =()=>{
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  return (
  <div className={classes.page}>
    <main className = {classes.main_reg}>  
        
        <form className={classes.form_reg}>
        <p className={classes.p_reg}>{isLogin?"Login":"Register"}</p><hr/>
              <input type="text" 
              placeholder="Username"
              className={classes.input_reg}
              autoFocus
              required
              />
          
              <input type="password" 
              placeholder="Password"
              autoFocus
              className={classes.input_reg}
              required
              />

            {!isLogin && <input type="password" 
              placeholder=" Confirm password"
              autoFocus
              className={classes.input_reg}
              required
              />
            } 

          <button className={classes.button_reg}>{isLogin?"Login":"Register"}</button>
        </form>
    </main>
  </div>
  )
}
export default Auth;