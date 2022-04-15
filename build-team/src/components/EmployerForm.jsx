import React from 'react'

function EmployerForm() {
  return (
    <div>
        <div className='container d-flex align-items-center justify-content-center' style={{minHeight: "100vh"}}>
            <div className='w-100' style={{maxWidth: "480px"}}>
                <div className='card mb-5 shadow'>
                    <div className='card-body'>
                        <img src={require("../images/logo.PNG")} className=" rounded mx-auto d-block"/>
                        <h3 className='text-center mb-4'>Employer Detail Form</h3>
                        <form>

                           <div className='input-group mb-3'>
                               <input type="text" className="form-control me-2" placeholder="Company Name"/>
                           </div> 

                           <div className='input-group mb-3'>
                               <input type="text" className="form-control" placeholder="Type"/>
                           </div> 
 
                           <div className='input-group mb-3'>
                               <textarea type="text" className="form-control" placeholder="Please Describe Your Company" rows="4"/>
                           </div>

                           <button type="submit" className="w-100 btn btn-primary mb-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployerForm