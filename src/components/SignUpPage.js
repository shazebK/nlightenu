import './LoginSignUp.css'
const SignUpPage=()=>{
    return (
    <div className='page'>
      <main className='main_reg'>  
         
         <form className="form_reg">
         <p className='p_reg'>Registration</p><hr />
               <input type="text" 
               placeholder="Username"
               className='input_reg'
               autoFocus
               required
               />
               
            <hr style={{color:"black",fontSize:"2px"}} />
            
               <input type="password" 
               placeholder="Password"
               autoFocus
               className='input_reg'
               required
               />
               <hr />
            
               <input type="password" 
               placeholder=" Confirm password"
               autoFocus
               className='input_reg'
               required
               />
               <hr />
            <button className='button_reg'>Sign Up</button>
            
            
         </form>
      </main>
    </div>
    )
}
export default SignUpPage;