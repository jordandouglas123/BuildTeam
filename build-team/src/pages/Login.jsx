import { Link } from "react-router-dom";
import "../css/loginform.css"
const Login = () => {
    return (
       
<div className="bg">
    

    <div className=" form-container mx-auto ">
    
     
    
    <img src= {require ("../images/logo.PNG")} className = " rounded mx-auto d-block  "/>   
    
    
    <form>
    <div class="form-floating m-3">
      <input type="email" class="form-control w-100 " id="Email" required/>
      <label for="Email">Email address</label>
    </div>
    <div class="form-floating m-3">
      <input type="password" class="form-control mb-4 w-100" id="Password" required/>
      <label for="Password">Password</label>
    </div>
    </form>
    
    
    
    <button type="submit" className="btn btn-primary mb-5 w-75" >Login</button>
    
    <div style={{paddingBottom: "15px" , textAlign: "center"}}>Have you registered with us as yet ?  <a href="http://localhost:3000/signup" > Sign Up Now </a></div>
    
    </div> 
    
    
    
    </div> // container
      
    
    
    
      )
    }
export default Login;
