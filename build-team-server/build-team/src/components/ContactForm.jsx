 <div>
        <div className='container d-flex align-items-center justify-content-center' style={{minHeight: "100vh"}}>
            <div className='w-100' style={{maxWidth: "480px"}}>
                <div className='card mb-5'>
                    <div className='card-body'>
                        <img src={require("../images/logo.PNG")} className=" rounded mx-auto d-block"/>
                        <h3 className='text-center mb-4'>Employee Detail Form</h3>
                        <form>
                           <div className='input-group mb-3'>
                               <input type="text" className="form-control me-2" placeholder="First Name"/>
                               <input type="text" className="form-control" placeholder="Last Name"/>
                           </div> 

                           <div className='input-group mb-3'>
                               <input type="text" className="form-control" placeholder="Occupation eg Fullstack Developer"/>
                           </div> 

                           <div className='input-group mb-3'>
                               <select type="text" className="form-select">
                                   <option value="1">Expert</option>
                                   <option value="2">Advanced</option>
                                   <option value="3">Intermediate</option>
                                   <option value="4">Intern</option>
                               </select>
                           </div> 

                           <div className='input-group mb-3'>
                               <textarea type="text" className="form-control" placeholder="Please Describe Yourself" rows="4"/>
                           </div>

                           <div className='input-group mb-3'>
                               <input type="number" data-type="currency" className="form-control" placeholder="Desired Salary" rows="4"/>
                           </div>

                           <button type="submit" className="w-100 btn btn-primary mb-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>