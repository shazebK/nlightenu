import './Register.css'
const Register=()=>{
    return (
    <main>  
       
       <form className="userRegistration">
       <p>Registration</p><hr />
             <input type="text" 
              placeholder="Username"
              autoFocus
              required
             />
             
           <hr style={{color:"black",fontSize:"2px"}} />
           
             <input type="password" 
              placeholder="Password"
              autoFocus
              required
             />
             <hr />
          
             <input type="password" 
              placeholder=" Confirm password"
              autoFocus
              required
             />
             <hr />
          <button>Sign Up</button>
          
           
       </form>
    </main>
    )
}
export default Register;