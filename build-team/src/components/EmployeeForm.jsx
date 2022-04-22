import axios from 'axios';
import React, {useState, useRef, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function EmployeeForm() {

    const {currentUser} = useAuth();
    const uid = currentUser?.uid;
    const [employeeUid, setEmployeeUid] = useState();
    const [loading, setLoading] = useState(false);

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const occupationRef = useRef();
    const levelRef = useRef();
    const decriptionRef = useRef();
    const desiredSalaryRef = useRef();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        let levelValue;
        e.preventDefault();
        setLoading(true);
        
        if(levelRef.current.value === '1'){
            levelValue = "Expert"
        }
        
        if(levelRef.current.value === '2'){
            levelValue = "Advance"
        }
        
        if(levelRef.current.value === '3'){
            levelValue = "Intermidate"
        }
        
        if(levelRef.current.value === '4'){
            levelValue = "Intern"
        }
        
        await axios.post("http://localhost:5000/api/employees", {
            userId: employeeUid,
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            occupation: occupationRef.current.value,
            level: levelValue,
            description: decriptionRef.current.value,
            desiredSalary: desiredSalaryRef.current.value,
            status : false,
            employeeTeamId : null
        }).then(res => {
            if(res.data.ok){
                navigate("/employee")
            }
        })
        setLoading(false)

    }

    useEffect(() => {
        setEmployeeUid(uid)
    }, [])
    

  return (
    <div>
        <div className='container d-flex align-items-center justify-content-center' style={{minHeight: "100vh"}}>
            <div className='w-100' style={{maxWidth: "480px"}}>
                <div className='card mb-5'>
                    <div className='card-body'>
                        <img src={require("../images/logo.PNG")} className=" rounded mx-auto d-block"/>
                        <h3 className='text-center mb-4'>Employee Detail Form</h3>
                        <form onSubmit={handleSubmit}>
                           <div className='input-group mb-3'>
                               <input type="text" className="form-control me-2" placeholder="First Name" ref={firstNameRef}/>
                               <input type="text" className="form-control" placeholder="Last Name" ref={lastNameRef}/>
                           </div> 

                           <div className='input-group mb-3'>
                               <input type="text" className="form-control" placeholder="Occupation eg Fullstack Developer" ref={occupationRef}/>
                           </div> 

                           <div className='input-group mb-3'>
                               <select type="text" className="form-select" ref={levelRef}>
                                   <option value="1">Expert</option>
                                   <option value="2">Advanced</option>
                                   <option value="3">Intermidate</option>
                                   <option value="4">Intern</option>
                               </select>
                           </div> 

                           <div className='input-group mb-3'>
                               <textarea type="text" className="form-control" placeholder="Please Describe Yourself" rows="4" ref={decriptionRef}/>
                           </div>

                           <div className='input-group mb-3'>
                               <input type="number" data-type="currency" className="form-control" placeholder="Desired Salary" rows="4" ref={desiredSalaryRef}/>
                           </div>

                           <button type="submit" className="w-100 btn btn-primary mb-3" disabled={loading}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeForm