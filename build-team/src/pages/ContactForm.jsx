const Contactus = () => {
    
    
return(
    
    
    <div>
    
    <div className='container d-flex align-items-center justify-content-center' style={{minHeight: "100vh"}}>
        <div className='w-100' style={{maxWidth: "480px"}}>
            <div className='card mb-5'>
                <div className='card-body'>
                    <img src={require("../images/logo.PNG")} className=" rounded mx-auto d-block"/>
                    <h3 className='text-center mb-4'>CONTACT US </h3>
                    <form>
                       <div className='input-group mb-4'>
                           <input type="text" className="form-control me-2" placeholder="First Name"/>
                           <input type="text" className="form-control" placeholder="Last Name"/>
                       </div> 

                       <div className='input-group mb-5'>
                           <input type="email" className="form-control" placeholder="name@example.com"/> 
                       </div> 


                       <div className='input-group mb-5'>
                           <textarea type="text" className="form-control" placeholder="Leave a message ...." rows="4"/>
                       </div>

                       

                       <button type="submit" className="w-100 btn btn-primary mb-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

);


};

export  default Contactus;