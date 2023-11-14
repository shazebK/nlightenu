import classes from "./LoginSignUp.module.css";
const SignUpPage=()=>{
    return (
    <div className={classes.page}>
      <main className={classes.main_reg}>  
         
         <form className={classes.form_reg}>
         <p className={classes.p_reg}>Registration</p><hr />
               <input type="text" 
               placeholder="Username"
               className={classes.input_reg}
               autoFocus
               required
               />
               
            <hr style={{color:"black",fontSize:"2px"}} />
            
               <input type="password" 
               placeholder="Password"
               autoFocus
               className={classes.input_reg}
               required
               />
               <hr />
            
               <input type="password" 
               placeholder=" Confirm password"
               autoFocus
               className={classes.input_reg}
               required
               />
               <hr />
            <button className={classes.button_reg}>Sign Up</button>
            
            
         </form>
      </main>
    </div>
    )
}
export default SignUpPage;