const SignUp = () => {
    return (
   <div style={{color: "#fff", 
    background: "#63738a", 
    backgroundImage: `url('${require("../images/signs.jpg")}')`,
    fontFamily: `'Roboto', sans-serif` }}>

<div style={{ height:"1000px", width: "510px", marginTop: "30px", marginLeft: "25em", marginRight: "auto", marginBottom: "0px", padding:"0px" }}>
   
  
    
    <br/>
    <br/>
    
<form id = "form" style={{marginTop: "30px", height: "700px", color: "#999", borderRadius: "3px",marginBottom: "15px", background: "#fff",  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.3)", padding: "30px"}}>
   
    <img src= {require ("../images/logo.png")} style={{paddingLeft: "130px"}}/>
    

                                   {/* FIRST NAME AND LAST NAME*/}
 <div>
   <input type="text" name = "last name" placeholder = "First Name" id="FirstName" style={{height: "41px", background: "#f2f2f2", boxShadow: "none !important", border: "none", borderRadius: "3px", marginBottom: "20px", paddingRight: "10px" , marginRight:"2em"}} autocomplete="off" required/>
   <input type="text"  name = "first name" placeholder = "Last Name" id="LastName" style={{ height: "41px", background: "#f2f2f2", boxShadow: "none !important", border: "none", borderRadius: "3px", marginBottom: "20px", paddingLeft: "10px" }} autocomplete="off" required/>
 </div> 

                                            {/* EMAIL*/}

<div>
<input type="email" name = "email" placeholder = "Email" id="Email"  style={{height: "41px", width:"450px", background: "#f2f2f2", boxShadow: "none !important", border: "none", borderRadius: "3px", marginBottom: "20px", paddingRight: "10px"}} minlength="8" autocomplete="off" required />
</div>
                                       {/* ADDRESS AND PHONE NUMBER */}
<div>

<input type="text"  name = "address" placeholder = "Address" id="Address" style={{height: "41px",  width:"450px", background: "#f2f2f2", boxShadow: "none !important", border: "none",  borderRadius: "3px", marginBottom: "20px"}} autocomplete="off"  required/>

</div>
 

<div>

<input type="tel"  name = "phonenumber" placeholder = "Phone Number" id="phone number" pattern="[0-9]{3}-[0-9]{4}" style={{height: "41px",  width:"450px", background: "#f2f2f2", boxShadow: "none !important", border: "none", borderRadius: "3px", marginBottom: "20px"}} autocomplete="off" required/>

</div>



<div>
  <input type="radio" id="employee" name="employ" value="Employee"/>
  <label for="employee">Employee</label><br/>

  <input type="radio" id="employer" name="employ" value = "Employer"/>
  <label for="employer">Employer</label>
  
</div>

<button type="submit" className="btn btn-primary" style={{ marginTop: "4em", marginLeft: "186px", marginRight: "auto", marginBottom: "auto" , width: "auto", height: "40px"}}>Sign Up</button>

</form>

<div style={{paddingBottom: "15px" , textAlign: "center"}}>Already have an account? <a href="http://localhost:3000/login" style={{color: "white"}}>Login here</a></div>
 

</div>


</div>  


    )
}
 
export default SignUp;