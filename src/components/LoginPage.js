import './LoginSignUp.css'
const LoginPage=()=>{
    return (
    <div className='page'>
      <main className='main_reg'>  
         
         <form className="form_reg">
         <p className='p_reg'>Login</p><hr/>
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
            <button className='button_reg'>Login</button>
         </form>
      </main>
    </div>
    )
}
export default LoginPage;