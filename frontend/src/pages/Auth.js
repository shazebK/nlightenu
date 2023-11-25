import { useSearchParams, Form, redirect, useActionData, json} from "react-router-dom";
import classes from "./Auth.module.css";
import { saveToken } from "../utils/auth";

const Auth =()=>{
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const errors = useActionData();
  return (
  <div className={classes.page}>
    <main className = {classes.main_reg}>  
        <Form method = "POST" className={classes.form_reg}>
        <p className={classes.p_reg}>{isLogin?"Login":"Register"}</p><hr/>

        {
        errors && 
        <ul style={{color:"red"}}>
          {Object.values(errors).map(message => <li key = {message}>{message}</li>)}
        </ul>
        }

        <input type="text" 
        placeholder="Username"
        className={classes.input_reg}
        name = "username"
        autoFocus
        required
        />
    
        <input type="password" 
        placeholder="Password"
        autoFocus
        className={classes.input_reg}
        name = "password"
        required
        />

      {!isLogin && <input type="password" 
        placeholder=" Confirm password"
        autoFocus
        name = "cPassword"
        className={classes.input_reg}
        required
        />
      } 

          <button className={classes.button_reg}>{isLogin?"Login":"Register"}</button>
        </Form>
    </main>
  </div>
  )
}

export default Auth;

export async function action({request,params}){
  const searchParams = new URL(request.url).searchParams;

  const mode = searchParams.get('mode') || "login";

  const data = await request.formData();
  const user = {
    username:data.get('username'),
    password:data.get('password'),
    cPassword:data.get('cPassword'),
  }

  const response = await fetch('http://localhost:8080/auth/' + mode,{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(user),
  });

  if(response.status === 422){
    return response;
  }

  if(!response.ok){
    return json({message:"Could not authenticate at this moment"},{status:500});
  }

  //If response data is starting with a number it cant parse it :)

  const responseData = await response.json();
  saveToken(responseData);
  
  return redirect('/');
}